
"use client"

import { useRef, useState } from "react"
import { UploadOutlined, EditOutlined } from '@ant-design/icons';

interface FileInputProps {
    setFile: (T: File) => void
}

const FileInput = ({setFile}: FileInputProps) => {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadedPhoto, setUploadedPhoto] = useState<string>('');

    const uploadFile = (fileData: any ) =>{
        const file: File = fileData?.target?.files?.[0];
        if(file) {
            const fr = new FileReader();
            fr.onload = () => {
                setUploadedPhoto(fr.result as string);
                setFile(file);
            }
            fr.readAsDataURL(file);
        }
    }

    return <div className="size-40 rounded-full border border-rgba(255,255,255,0.1) text-center text-primary-slate bg-[#efefef] flex justify-center items-center relative">
        <form onSubmit={uploadFile}>
            <label className="cursor-pointer">
            <UploadOutlined style={{fontSize: '2em'}} />
                <input ref={fileInputRef} type="file" id="file-input" onChange={uploadFile} className="hidden" accept="image/*"></input>
            </label>
        </form> 
       { uploadedPhoto && <div className="absolute inset-0">
            <img className="size-40 rounded-full object-cover shadow-md" src={uploadedPhoto} alt="profile-pic"></img>
            <button className="absolute right-0 top-[85%]" onClick={() => fileInputRef.current?.click()}><EditOutlined /></button>
        </div>}
    </div>
}

export default FileInput