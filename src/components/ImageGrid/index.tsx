import Image from '../../components/Image';
import type {ImageProps} from '../../components/Image';

import './style.css';

interface ImageGridProps {
    folderPath: string; // filepath of folder containing numbered images
    amount: number; // amount of numbered images (0.webp, 1.webp, 2.webp <-- 3 images)
    extension: string; // image extension (.jpg, .webp, etc)
    imageWidth?: number; // intrisic width of the image
    imageHeight?: number; // intrisic height of the image
}

export default function ImageGrid({ folderPath, amount, extension, imageWidth, imageHeight }: ImageGridProps) {
    const images: Array<any> = [];

    for (let i = 0; i < amount; i++) {
        const filename: string = `${folderPath}/${i}.${extension}`;
        const props: ImageProps = { key: i, filename, imageWidth, imageHeight };
        images.push(<Image {...props} />);
    }

    return (
        <div className="image-grid">
            {images}
        </div>
    );
}
