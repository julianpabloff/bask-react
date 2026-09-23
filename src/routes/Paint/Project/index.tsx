import { useEffect, useRef, useState } from 'react';
import useWindowWidth from '../../../utils/useWindowWidth';

import Image from '../../../components/Image';
import ImageCarousel from '../../../components/ImageCarousel';
import Gallery from '../Gallery';

import './style.css';

interface ProjectProps {
    title: string // Trek Madone
    folderPath: string; // 'paint/project/madone'
    imageCount: number; // 8
    themeColor: string; // #001c3f
    children: any; // the <p>description</p> tags
}

export default function Project({ title, folderPath, imageCount, themeColor, children }: ProjectProps) {
    const [galleryActive, setGalleryActive] = useState<boolean>(false);
    const exitRef = useRef<any>(null);
    let windowWidth = useWindowWidth();

    const backgroundStyle = { background: `linear-gradient(to top, black, ${themeColor})` };

    function openGallery(imageIndex: number) {
        console.log('opening gallery...', imageIndex);
        setGalleryActive(true);
        exitRef.current.style.display = 'flex';
        setTimeout(() => exitRef.current.style.opacity = '1', 200);
    }

    function closeGallery() {
        console.log('closing gallery...');
        setGalleryActive(false);
        exitRef.current.style.opacity = '0';
        setTimeout(() => exitRef.current.style.display = 'none', 220);
    }

    return (
        <div className="project" style={backgroundStyle}>
            <div className="project-content max-w-container">
                <div className="main max-w">
                    <div className="text">
                        <h1>{title}</h1>
                        {windowWidth <= 700 ?
                            <div className="feature-image small">
                                <Image filename={`${folderPath}/feature.webp`} />
                            </div>
                        : ''}
                        <div className="children-container">
                            {children}
                        </div>
                    </div>
                    {windowWidth > 700 ?
                        <div className="feature-image">
                            <Image filename={`${folderPath}/feature.webp`} />
                        </div>
                    : ''}
                </div>
                <ImageCarousel folderPath={folderPath} imageCount={imageCount} onGalleryView={openGallery} />
            </div>
            <div className="floating-title-container max-w-container">
                <div className="max-w justify-between align-center">
                    <h1 className="max-w">{title}</h1>
                    <div ref={exitRef} className="gallery-exit" onClick={closeGallery}>X</div>
                </div>
            </div>
            <Image filename={`${folderPath}/background.webp`} className="background" />
            <Gallery active={galleryActive} folderPath={folderPath} themeColor={themeColor} onExit={closeGallery} />
        </div>
    );
}
