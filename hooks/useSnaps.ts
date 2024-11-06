import { Snap } from "@/models/snap-data/snap-data.model";
import axios from "axios";
import { useEffect, useState } from "react"

const useSnaps = ({reloadSnaps}: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [snaps, setSnaps] = useState<Snap[]>([]);

    useEffect(() => {
        (async() => {
            const {data: {snapData}} = await axios.get('/api/photo-upload');
            setSnaps(snapData);
            setIsLoading(false);
        })()
    }, [reloadSnaps]);

    return {isLoading, snaps}

}

export default useSnaps