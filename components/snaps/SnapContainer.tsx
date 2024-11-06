"use client";

import useSnaps from "@/hooks/useSnaps";
import { Snap } from "@/models/snap-data/snap-data.model";
import MyImage from "@/ui/Image";


export interface SnapContainerProps {
    reloadSnaps: boolean;
}

const SnapContainer = ({reloadSnaps}: SnapContainerProps) => {

    const {isLoading, snaps} = useSnaps({reloadSnaps});

    return (
        <>
           { isLoading ? <div>Loading Snaps, Please wait ...</div> :  <div className="w-full p-8 m-5">
            <div className="flex justify-center items-center m-5 flex-wrap gap-5">
                {
                    snaps.map((snap: Snap, index: number) => <SnapBox key={index} snap={snap} />)
                }
            </div>
        </div> }
        </>
    )
    
}

const SnapBox = ({snap}: {snap: Snap}) => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center border rounded-lg p-3 border-[rgba(255,255,255,0.2)]">
            <MyImage imgUrl={snap.photoUrl} />
            <div className="text-base text-white text-center">{snap.comment}</div>
        </div>
    )
}

export default SnapContainer;