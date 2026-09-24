import { useEffect, useRef, useState } from 'react';
import useWindowWidth from '../../../utils/useWindowWidth';
import useAnimateInOut from '../../../utils/useAnimateInOut';

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
    let windowWidth = useWindowWidth();
    const [galleryActive, setGalleryActive] = useState<boolean>(false);
    const [galleryIndex, setGalleryIndex] = useState<number>(0);

    // Refs
    const h1Ref = useRef<any>(null);
    const exitRef = useRef<any>(null);
    const exitAnimate = useAnimateInOut(exitRef, 'flex', 200, { inDelay: 400 });

    // themeColor styles
    const backgroundStyle = { background: `linear-gradient(to top, black, ${themeColor})` };
    const shadowStyle = { boxShadow: `0.7rem 0.5rem ${themeColor}` };

    function openGallery(imageIndex: number) {
        setGalleryIndex(imageIndex);
        setGalleryActive(true);
        exitAnimate.in(); // but only for desktop view
    }

    function closeGallery() {
        setGalleryActive(false);
        exitAnimate.out(); // but only for desktop view
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
                        {children}
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
                    <h1 ref={h1Ref} style={shadowStyle} className="max-w">{title}</h1>
                    <div ref={exitRef} className="gallery-exit text-button" onClick={closeGallery}>X</div>
                </div>
            </div>
            <Image filename={`${folderPath}/background.webp`} className="background" />
            <Gallery
                active={galleryActive}
                index={galleryIndex}
                folderPath={folderPath}
                imageCount={imageCount}
                themeColor={themeColor}
                onExit={closeGallery}
            />
        </div>
    );
}
