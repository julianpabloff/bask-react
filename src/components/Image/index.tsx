import useImage from '../../utils/useImage';
import type {IImage} from '../../utils/useImage';

interface ImageProps {
    filename: string;   // with /assets as the base folder
    alt?: string;       // image alt text 
    className?: string; // image className
    style?: object;
}

export default function Image({ filename, alt, className, style }: ImageProps) {
    const { src }: IImage = useImage(filename);
    const imgProps: object = { src, alt, className, style };

    return <img {...imgProps} />;
}
