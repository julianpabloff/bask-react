import { useEffect, useState } from 'react';
import type {IImage} from '../../utils/useImage';

import Image from '../Image';

import './style.css';

interface GalleryImage {
    image: IImage;
    index: number;
    width: number; // px
}

interface GalleryProps {
    filenames: string[];
    height: number; // default 450 px
}

export default function Gallery({ filenames, height }: GalleryProps) {
    // const [index, setIndex] = useState<number>(0);
    const [imageData, setImageData] = useState<GalleryImage[]>();

    const imageArray: IImage[] = [];

    /*
    for (let i = 0; i < filenames.length; i++)
        imageArray.push(<Image key={i} filename={filenames[i]} />);
    */

    useEffect(() => {
        const data : GalleryImage[] = [];

        for (let i = 0; i < imageArray.length; i++) {
            const image = imageArray[i];
            data.push({
                image,
                index: i,
                width: image.clientWidth
            });
        }

        setImageData(data);
    }, []);

    return (
        <div className="gallery-container" style={{height: `${height}px`}}>
            <div className="images-container">
            </div>
        </div>
    );
}
