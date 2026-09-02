// import useImage from '../../utils/useImage';
// import type {IImage} from '../../utils/useImage';

export interface ImageProps {
    filename: string;   // with /assets as the base folder
    alt?: string;       // image alt text 
    className?: string; // image className
    style?: object;
    imageWidth?: number; // intrisic width of the image
    imageHeight?: number; // intrisic height of the image
    key?: number; // for react interation
}

const BASE_URL = import.meta.env.BASE_URL;

export default function Image({ filename, alt, className, style, imageWidth, imageHeight }: ImageProps) {
    // const { src }: IImage = useImage(filename);
    const src = `${BASE_URL}assets/${filename}`;
    const imgProps: object = { src, alt, className, style, width: imageWidth, height: imageHeight };

    // return <img src={src} alt={alt} className={className} style={style} />;
    return <img {...imgProps} />
}
