import { useEffect, useRef, useState } from 'react';
import useWindowWidth from '../../../utils/useWindowWidth';

import Image from '../../../components/Image';

import './style.css';

interface ImageCarouselProps {
    folderPath: string; // 'paint/project/madone'
    imageCount: number; // 8
}

function ImageCarousel({ folderPath, imageCount }: ImageCarouselProps) {
    const [carouselImages, setCarouselImages] = useState<any[]>([]);

    // Refs
    const scrollingRef = useRef<boolean>(false);
    let reachedEnd = true;
    const carouselRef = useRef<any>(null);
    const imagesRef = useRef<any[]>([]);

    // Scrolling paramters
    const imageGap = 50; // as set in style.css
    let imageWidth; // either 150px or 200px, set in style.css
    useWindowWidth(w => imageWidth = (w <= 700) ? 150 : 200);
    const scrollInterval = 20; // determines how fast it scrolls
    const scrollTime = (imageWidth + imageGap) * scrollInterval; // time to slide over 1 image

    function initImages() {
        const array: any[] = [];
        for (let i = 0; i < imageCount; i++) {
            array.push(<Image filename={`${folderPath}/thumb${i}.webp`} />);
        }
        setCarouselImages(array);
        imagesRef.current = array;
    }

    function resetScrollOver() {
        carouselRef.current.scrollLeft = 0;
    }

    function imageSpawn() {
        if (reachedEnd) return;
        const frontImage = imagesRef.current[0];
        imagesRef.current.push(frontImage);
        setCarouselImages(imagesRef.current);
        setTimeout(() => {
            imagesRef.current.shift();
            setCarouselImages(imagesRef.current);
        }, scrollTime);
    }

    function scrollOver() {
        if (carouselRef.current == null) return;
        const currentX = carouselRef.current.scrollLeft;

        if (currentX < carouselRef.current.scrollLeftMax) {
            carouselRef.current.scrollLeft = currentX + 1;
            reachedEnd = false;
        } else {
            console.log('scroll end'); // this is where to insert new image
            imageSpawn();
            reachedEnd = true;
        }
    }

    useEffect(() => {
        initImages();
        resetScrollOver();
        setInterval(scrollOver, scrollInterval);
    }, []);

    return (
        <div ref={carouselRef} className="carousel">
            {...carouselImages}
        </div>
    );
}

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
