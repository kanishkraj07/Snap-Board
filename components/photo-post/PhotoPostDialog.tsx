"use client"

import Dialog from "@/ui/Dialog";
import { Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import FileInput from "@/ui/FileInput";

export interface PhotoPostDialogProps {
    isOpenDialog: boolean;
    setIsOpenDialog: (T: boolean) => void;
    setReloadSnaps: (T: boolean) => void;
}

const PhotoPostDialog = ({isOpenDialog, setIsOpenDialog, setReloadSnaps}: PhotoPostDialogProps) => {

    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState<boolean>(false);
    const [isUpload, setIsUpload] = useState<boolean>(false);
    const [comment, setComment] = useState<string>();
 

    useEffect(() => {
        if(isUpload) {
            (async() => {
                setLoading(true);
                const formData = new FormData();

                    formData.append('file', file || '');
                    formData.append('comment', comment || '');

                    try {
                      await axios("/api/photo-upload", {
                            method: "POST",
                            data: formData 
                          });
                          setLoading(false);
                          setIsOpenDialog(false);
                          setIsUpload(isUpload => !isUpload);
                          setReloadSnaps(isSnaps => !isSnaps);
                    } catch(e) {
                        console.log(e);
                    } 
            })()
        }
    }, [isUpload]);

    const uploadPhoto = async() => {
        if(!file) {
            return;
        }
        setIsUpload(true);
    }

    return (
        <Dialog title="Post Your Photo" isCentered open={isOpenDialog} setOpen={setIsOpenDialog} onClick={uploadPhoto} loading={loading}>
            <div className="flex flex-col justify-center items-center gap-5">
                <FileInput setFile={setFile} />
                <Input onChange={(e) => setComment(e.target.value)} placeholder="Comment" />
            </div>
        </Dialog>
    )
}

export default PhotoPostDialog;