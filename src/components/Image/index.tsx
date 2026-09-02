// import useImage from '../../utils/useImage';
// import type {IImage} from '../../utils/useImage';

interface ImageProps {
    filename: string;   // with /assets as the base folder
    alt?: string;       // image alt text 
    className?: string; // image className
    style?: object;
}

const BASE_URL = import.meta.env.BASE_URL;

export default function Image({ filename, alt, className, style }: ImageProps) {
    // const { src }: IImage = useImage(filename);
    const src = `${BASE_URL}assets/${filename}`;
    const imgProps: object = { src, alt, className, style };

    // return <img src={src} alt={alt} className={className} style={style} />;
    return <img {...imgProps} />
}
