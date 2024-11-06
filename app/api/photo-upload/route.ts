import { NextResponse } from "next/server";
import { PutObjectCommand, S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { PrismaClient, SnapDetials } from "@prisma/client";
import { v4 } from "uuid";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'AWS_ACCESS_KEY_ID',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'AWS_SECRET_ACCESS_KEY'
    },
    region: process.env.AWS_BUCKET_REGION || 'AWS_BUCKET_REGION'
});

const prismaClient = new PrismaClient();

export async function POST(request) {

    const formData = await request.formData();

  const file = formData.get("file");
  const comment = formData.get("comment");
  
    if(!file) {
        return NextResponse.json({message: 'File is required'}, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    try {
        const photoKey = `${v4()}${file.name}`;
        const addMediaParams = {
            Bucket: process.env.AWS_IMAGE_BUCKET_NAME || 'AWS_IMAGE_BUCKET_NAME',
            Key: photoKey,
            Body: buffer,
            ContentType: file?.mimetype
        }
        await s3Client.send(new PutObjectCommand(addMediaParams));
       const data = await prismaClient.snapDetials.create({
            data: {
                id: v4(),
                photoKey,
                comment,
                createdOn: new Date()
            },
            select: {
                id: true,
                photoKey: true,
                comment: true,
                createdOn: true,
            }
        });

        const newSnapData = {
            ...data,
            photoURL: await getSignedURL(data.photoKey)
        }

        return NextResponse.json({message: 'Snap Uploaded successfully', newSnapData});
    } catch(e) {
        return NextResponse.json({ message: 'Error while uploading Snap' + e }, { status: 400 });
    }
}

export async function GET() {
    const snapDetails: SnapDetials[] = await prismaClient.snapDetials.findMany();
   const mappedSnapDetails = await Promise.all(snapDetails.map(async (snap: SnapDetials) => {
        const photoUrl = await getSignedURL(snap.photoKey);
         return {
            ...snap,
            photoUrl
         }
    }));
    return NextResponse.json({snapData: mappedSnapDetails}, {status: 200});
}

const getSignedURL: (key: string) => Promise<string> = async(key: string) => {
    const getObjectComand = new GetObjectCommand({Bucket: process.env.AWS_IMAGE_BUCKET_NAME || 'AWS_IMAGE_BUCKET_NAME', Key: key});
    const photoUrl = await getSignedUrl(s3Client, getObjectComand, {expiresIn: 60 * 60 * 24 * 7});
    return photoUrl;
}