import { useEffect, useRef, useState } from 'react';
import useWindowWidth from '../../utils/useWindowWidth';

import Image from '../Image';

import './style.css';

interface CarouselImageProps {
    folderPath: string;
    index: number;
    onGalleryView: (i: number) => void;
}

function CarouselImage({ folderPath, index, onGalleryView }: CarouselImageProps) {
    const imageRef = useRef<any>(null);
    const filename = `${folderPath}/thumb${index}.webp`;

    function handleClick() {
        imageRef.current.style.transform = 'scale(1.5)';
        imageRef.current.style.opacity = '0';

        // Reset image (gallery takes 400 ms to open)
        setTimeout(() => imageRef.current.style.transition = 'none', 410);
        setTimeout(() => {
            imageRef.current.style.transform = 'initial';
            imageRef.current.style.opacity = '1';
        }, 420);
        setTimeout(() => imageRef.current.style.transition = 'all 0.2s', 430);

        onGalleryView(index);
    }

    return (
        <Image ref={imageRef} filename={filename} onClick={handleClick} />
    );
}

interface ImageCarouselProps {
    folderPath: string; // 'paint/project/madone'
    imageCount: number; // 8
    onGalleryView: (i: number) => void;
}

export default function ImageCarousel({ folderPath, imageCount, onGalleryView }: ImageCarouselProps) {
    const [carouselImages, setCarouselImages] = useState<any[]>([]);

    // Refs
    const carouselRef = useRef<any>(null);
    const containerRef = useRef<any>(null);
    const imagesRef = useRef<any[]>([]);
    const xRef = useRef<number>(0);

    // Scrolling paramters
    const imageGap = 25; // as set in style.css
    const imageWidth = useRef<number>(200); // either 150px or 200px, set in style.css
    const carouselCount = useRef<number>(imageCount);
    const scrollInterval = 30; // determines how fast it scrolls

    function addImage() {
        const imageIndex = imagesRef.current.length % imageCount;
        imagesRef.current.push(imagesRef.current[imageIndex]);
        carouselCount.current = imagesRef.current.length;
        setCarouselImages(Array.from(imagesRef.current));
    }

    function handleWindowWidth(windowWidth: number) {
        imageWidth.current = windowWidth <= 700 ? 150 : 200;

        if (!imagesRef.current.length) return; // wait until images have been populated)
        const imageUnit = imageWidth.current + imageGap;
        const totalImageWidth = imageUnit * imageCount + imageGap;

        // how many images fill the window minus how many images there are currently
        const additional = Math.ceil(windowWidth / imageUnit) - carouselCount.current + 1;
        if (additional < 1) return;

        for (let i = 0; i < additional; i++) addImage();
        // containerRef.current.style.transform = 'translateX(0)';
    }
    useWindowWidth(handleWindowWidth);

    function initImages() {
        const array: any[] = [];
        for (let i = 0; i < imageCount; i++) {
            array.push(<CarouselImage folderPath={folderPath} index={i} onGalleryView={onGalleryView} />);
        }
        setCarouselImages(array);
        imagesRef.current = array;
        carouselCount.current = imageCount;
    }

    function scrollOver() {
        if (!containerRef.current) return;
        const imageUnit = imageWidth.current + imageGap;
        xRef.current++;
        if (xRef.current % imageUnit == 0) addImage();
        containerRef.current.style.transform = `translateX(-${xRef.current}px)`;
    }

    useEffect(() => {
        initImages();
        handleWindowWidth(window.innerWidth);
        setInterval(scrollOver, scrollInterval);
    }, []);

    return (
        <div ref={carouselRef} className="image-carousel">
            <div ref={containerRef} className="images-container">
                {...carouselImages}
            </div>
        </div>
    );
}
