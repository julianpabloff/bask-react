import { useEffect, useState } from 'react';

export default function useScrollY(callback?: (s: number) => void): number {
    const [scrollPos, setScrollPos] = useState<number>(window.scrollY);

    const handleScroll = () => setScrollPos(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (callback) callback(scrollPos);
    }, [scrollPos]);

    return scrollPos;
}
