import { useEffect, useState } from 'react';

export default function useWindowWidth(callback?: (w: number) => void): number {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (callback) callback(windowWidth);
    }, [windowWidth]);

    return windowWidth;
}
