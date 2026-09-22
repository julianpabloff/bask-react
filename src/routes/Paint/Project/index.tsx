import { useEffect, useRef, useState } from 'react';
import useWindowWidth from '../../../utils/useWindowWidth';

import Image from '../../../components/Image';
import ImageCarousel from '../../../components/ImageCarousel';

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

    const backgroundStyle = { background: `linear-gradient(to top, black, ${themeColor})` };

    return (
        <div className="project" style={backgroundStyle}>
            <div className="project-content">
                <div className="main">
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
                <ImageCarousel folderPath={folderPath} imageCount={imageCount} />
            </div>
            <Image filename={`${folderPath}/background.webp`} className="background" />
        </div>
    );
}
