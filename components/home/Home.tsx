"use client"

import { Button } from "antd";
import PhotoPostDialog from "../photo-post/PhotoPostDialog";
import { useState } from "react";
import SnapContainer from "../snaps/SnapContainer";

const HomePage = () => {

    const [isOpenPhotoPostDialog, setIsOpenPhotoPostdialog] = useState<boolean>(false);
    const [reloadSnaps, setReloadSnaps] = useState<boolean>(false);

    return (
    <>
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 items-center">
                <div className="text-3xl text-center">Welcome to <span className="font-medium">Snapboard!</span></div>
                <div className="text-md text-center">A place to capture and share your favorite moments — post your snaps and join the community!</div>
                <Button type="primary" size="large" onClick={() => setIsOpenPhotoPostdialog(isOpen => !isOpen)}>Post Your Photo</Button>
                {
                    isOpenPhotoPostDialog && <PhotoPostDialog isOpenDialog={isOpenPhotoPostDialog} setIsOpenDialog={setIsOpenPhotoPostdialog} setReloadSnaps={setReloadSnaps}/>
                }
            </main>
            <SnapContainer reloadSnaps={reloadSnaps} />
        </div>
    </>
    )
}

export default HomePage;