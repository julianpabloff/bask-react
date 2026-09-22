import { useEffect, useRef, useState } from 'react';
import useWindowWidth from '../../utils/useWindowWidth';

import Image from '../Image';

import './style.css';

interface ImageCarouselProps {
    folderPath: string; // 'paint/project/madone'
    imageCount: number; // 8
}

export default function ImageCarousel({ folderPath, imageCount }: ImageCarouselProps) {
    const [carouselImages, setCarouselImages] = useState<any[]>([]);

    // Refs
    const carouselRef = useRef<any>(null);
    const containerRef = useRef<any>(null);
    const secondContainerRef = useRef<any>(null);
    const imagesRef = useRef<any[]>([]);
    const xRef = useRef<number>(0);

    // Scrolling paramters
    const imageGap = 25; // as set in style.css
    const imageWidth = useRef<number>(200); // either 150px or 200px, set in style.css
    const carouselCount = useRef<number>(imageCount);
    const scrollInterval = 30; // determines how fast it scrolls

    function updateCarousel() {
        setCarouselImages(Array.from(imagesRef.current));
    }

    function handleWindowWidth(windowWidth: number) {
        imageWidth.current = windowWidth <= 700 ? 150 : 200;

        if (!imagesRef.current.length) return; // wait until images have been populated)
        const imageUnit = imageWidth.current + imageGap;
        const totalImageWidth = imageUnit * imageCount + imageGap;

        // how many images fill the window minus how many images there are currently
        const additional = Math.ceil(windowWidth / imageUnit) - carouselCount.current + 1;
        if (!additional) return;
        console.log(`${additional} additional image(s) needed`);

        if (additional > 0) {
            for (let i = 0; i < additional; i++) {
                const imageIndex = imagesRef.current.length % imageCount;
                imagesRef.current.push(imagesRef.current[imageIndex]);
            }
        } else if (additional < 0) {
            for (let i = additional; i < 0; i++) {
                imagesRef.current.pop();
            }
        }
        console.log(imagesRef.current);
        carouselCount.current = imagesRef.current.length;
        updateCarousel();
    }
    useWindowWidth(handleWindowWidth);

    function initImages() {
        const array: any[] = [];
        for (let i = 0; i < imageCount; i++) {
            array.push(<Image filename={`${folderPath}/thumb${i}.webp`} />);
        }
        setCarouselImages(array);
        imagesRef.current = array;
        carouselCount.current = imageCount;
    }

    function scrollOver() {
        const imageUnit = imageWidth.current + imageGap;
        xRef.current++;
        if (xRef.current % imageUnit == 0) {
            console.log('bleh');
            const newImageIndex = imagesRef.current.length - imageCount;
            imagesRef.current.push(imagesRef.current[newImageIndex]);
            updateCarousel();
            // I'm just gonna not do this reset vvv
            // containerRef.current.style.transform = 'translateX(0)';
            // xRef.current = 0;
        } else {
            containerRef.current.style.transform = `translateX(-${xRef.current}px)`;
        }
    }

    useEffect(() => {
        initImages();
        handleWindowWidth(window.innerWidth);
        // setInterval(scrollOver, scrollInterval);
    }, []);

    return (
        <div ref={carouselRef} className="image-carousel">
            <div ref={containerRef} className="images-container">
                {...carouselImages}
            </div>
            <div ref={secondContainerRef} className="images-container">
                {...carouselImages}
            </div>
        </div>
    );
}
