import { useEffect, useRef, useState } from 'react';
import useAnimateInOut from '../../../utils/useAnimateInOut';

import Image from '../../../components/Image';
import ExitButton from '../../../components/ExitButton';

import './style.css';

interface GalleryProps {
    active: boolean; // open or closed
    index: number; // image index to open to
    folderPath: string;
    imageCount: number;
    themeColor: string; // #001c3f
    onExit: () => void;
}

export default function Gallery({ active, index, folderPath, imageCount, themeColor, onExit }: GalleryProps) {
    const [activeFilename, setActiveFilename] = useState<string>(''); // swap out image filename for DOM render purposes
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const activeIndex = useRef<number>(index);

    // DOM Refs
    const galleryRef = useRef<any>(null);
    const imageRef = useRef<any>(null);
    const leftRef = useRef<any>(null);
    const rightRef = useRef<any>(null);
    const exitRef = useRef<any>(null);
    const galleryAnimate = useAnimateInOut(galleryRef, 'flex', 400);
    const imageAnimate = useAnimateInOut(imageRef, 'flex', 200, { inDelay: 200 });
    const leftAnimate = useAnimateInOut(leftRef, 'flex', 200, { inDelay: 400 });
    const rightAnimate = useAnimateInOut(rightRef, 'flex', 200, { inDelay: 400 });
    const exitAnimate = useAnimateInOut(exitRef, 'flex', 200, { inDelay: 400 });

    const backgroundStyle = { background: `linear-gradient(to bottom, black, ${themeColor} 125%)` };

    function insertActiveImage(imageIndex: number = index) {
        setImageLoaded(false);
        const filename = `${folderPath}/gallery${imageIndex}.webp`;
        setActiveFilename(filename);
    }

    function handleImageLoad() {
        setImageLoaded(true);
    }

    function handleActive() {
        if (active) {
            insertActiveImage();
            activeIndex.current = index;
            galleryAnimate.in();
            imageAnimate.in();
            leftAnimate.in();
            rightAnimate.in();
        } else {
            galleryAnimate.out();
            imageAnimate.out();
            leftAnimate.out();
            rightAnimate.out();
        }
    }

    function handleLeft() {
        const newIndex = (activeIndex.current + imageCount - 1) % imageCount;
        insertActiveImage(newIndex);
        activeIndex.current = newIndex;
    }

    function handleRight() {
        const newIndex = (activeIndex.current + 1) % imageCount;
        insertActiveImage(newIndex);
        activeIndex.current = newIndex;
    }

    useEffect(() => {
        handleActive();
    }, [active]);

    return (
        <div ref={galleryRef} style={backgroundStyle} className="gallery max-w-container">
            <div ref={imageRef} className="image-container">
                <Image filename={activeFilename} className={imageLoaded ? 'loaded' : ''} onLoad={handleImageLoad} />
                {!imageLoaded ? <p>Loading image...</p> : ''}
            </div>
            <div className="button-container max-w">
                <div ref={leftRef} onClick={handleLeft} className="left text-button">&lt;</div>
                <div ref={exitRef} className="exit text-button">X</div>
                <div ref={rightRef} onClick={handleRight} className="right text-button">&gt;</div>
            </div>
        </div>
    );
}
