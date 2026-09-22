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
    let reachedEnd = true;
    const carouselRef = useRef<any>(null);
    const imagesRef = useRef<any[]>([]);

    // Scrolling paramters
    const imageGap = 25; // as set in style.css
    const imageWidth = useRef<number>(200); // either 150px or 200px, set in style.css
    const carouselCount = useRef<number>(imageCount);
    const scrollInterval = 20; // determines how fast it scrolls

    function handleWindowWidth(windowWidth: number) {
        imageWidth.current = windowWidth <= 700 ? 150 : 200;

        if (!imagesRef.current.length) return; // wait until images have been populated)
        const imageUnit = imageWidth.current + imageGap;
        const totalImageWidth = imageUnit * imageCount + imageGap;

        // how many images fill the window minus how many images there are currently
        const additional = Math.ceil(windowWidth / imageUnit) - carouselCount.current;
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
        setCarouselImages(imagesRef.current);
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

    function imageSpawn() {
        if (reachedEnd) return;
        const frontImage = imagesRef.current[0];
        imagesRef.current.push(frontImage);
        setCarouselImages(imagesRef.current);
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
        // setCarouselImages(imagesRef.current);
    }, [imagesRef.current]);

    useEffect(() => {
        initImages();
        handleWindowWidth(window.innerWidth);
        // setInterval(scrollOver, scrollInterval);
    }, []);

    return (
        <div ref={carouselRef} className="image-carousel">
            {...carouselImages}
        </div>
    );
}
