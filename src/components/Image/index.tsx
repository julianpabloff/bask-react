// import useImage from '../../utils/useImage';
// import type {IImage} from '../../utils/useImage';

export interface ImageProps {
    filename: string;   // with /assets as the base folder
    onLoad?: () => void; // run when the image actually loads
    alt?: string;       // image alt text 
    className?: string; // image className
    style?: object;
    ref?: any; // enable useRef
    onClick?: any; // enable image clicking
    key?: number; // for react interation
}

const BASE_URL = import.meta.env.BASE_URL;

export default function Image({ filename, onLoad, alt, className, style, ref, onClick }: ImageProps) {
    // const { src }: IImage = useImage(filename);
    const src = `${BASE_URL}assets/${filename}`;
    const imgProps: object = { src, alt, className, style, ref, onClick };

    function handleLoad() {
        if (onLoad) onLoad();
    }

    // return <img src={src} alt={alt} className={className} style={style} />;
    return <img onLoad={handleLoad} {...imgProps} />
}
