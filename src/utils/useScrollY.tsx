import { useEffect, useState } from 'react';

export default function useScrollY(callback: () => void): number {
    const [scrollPos, setScrollPos] = useState<number>(0);

    const handleScroll = () => setScrollPos(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        callback(scrollPos);
    }, [scrollPos]);

    return { scrollPos };
}
