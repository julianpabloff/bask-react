import { useEffect, useState } from 'react';

export interface IImage {
    loading: boolean;
    error: unknown;
    src: string | undefined;
}

// filename is with /assets as the base folder
// const BASE_URL = import.meta.env.BASE_URL;

export default function useImage(filename: string): IImage {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown | null>(null);
    const [src, setSrc] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function fetchImage() {
            try {
                // console.log(`importing from assets/${filename}`);
                const response: any = await import(/* @vite-ignore */`../assets/${filename}`);
                setSrc(response.default);
                // console.log('response:' + response.default);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchImage();
    }, [filename]);

    return {
        loading,
        error,
        src
    }
}
