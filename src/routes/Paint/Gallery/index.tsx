import { useEffect, useRef, useState } from 'react';

import Image from '../../../components/Image';
import ExitButton from '../../../components/ExitButton';

import './style.css';

interface GalleryProps {
    active: boolean;
    folderPath: string;
    imageCount: number;
    title: string;
    themeColor: string; // #001c3f
    onExit: () => void;
}

export default function Gallery({ active, folderPath, imageCount, title, themeColor, onExit }: GalleryProps) {
    const galleryRef = useRef<any>(null);

    useEffect(() => {
        if (active) {
            galleryRef.current.style.display = 'flex';
            setTimeout(() => {
                galleryRef.current.style.opacity = '1'
                galleryRef.current.style.background = `linear-gradient(to bottom, black, ${themeColor} 150%)`;
            }, 5);
        } else {
            galleryRef.current.style.opacity = '0';
            setTimeout(() => galleryRef.current.style.display = 'none', 405);
        }
    }, [active]);

    return (
        <div ref={galleryRef} className="gallery">
            <Image filename={`${folderPath}/feature.webp`} />
        </div>
    );
}
