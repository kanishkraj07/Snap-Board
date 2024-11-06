import axios from "axios";
import { useEffect, useState } from "react"
import { Snap } from './../models/snap-data/snap-data.model';

const useSnaps = ({reloadSnaps}: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [snaps, setSnaps] = useState<Snap[]>([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get('/api/photo-upload');
            const snapData: Snap[] = response.data.snapData as Snap[];
            snapData.sort((a: Snap, b: Snap) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime());
            setSnaps(snapData);
            setIsLoading(false);
        })()
    }, [reloadSnaps]);

    return {isLoading, snaps}

}

export default useSnaps