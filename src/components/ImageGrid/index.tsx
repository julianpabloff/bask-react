import Image from '../../components/Image';

import './style.css';

interface ImageGridProps {
    folderPath: string; // filepath of folder containing numbered images
    amount: number; // amount of numbered images (0.webp, 1.webp, 2.webp <-- 3 images)
    extension: string; // image extension (.jpg, .webp, etc)
}

export default function ImageGrid({ folderPath, amount, extension }: ImageGridProps) {
    const images: Array<any> = [];

    for (let i = 0; i < amount; i++) {
        const filename = `${folderPath}/${i}.${extension}`;
        images.push(<Image key={i} filename={filename} />);
    }

    return (
        <div className="image-grid">
            {images}
        </div>
    );
}
