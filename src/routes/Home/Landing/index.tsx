import useImage from '../../../utils/useImage';
import type {IImage} from '../../../utils/useImage';

import Image from '../../../components/Image';

import './style.css';

export default function Landing() {
    const s5: IImage = useImage('s5.jpg');
    const s5Mobile: IImage = useImage('s5-mobile.jpg');

    return (
        <section className="landing-images">
            <picture>
                <source media="(width <= 600px)" srcSet={s5Mobile.src} />
                <source media="(width > 600px)" srcSet={s5.src} />
                <img className="main" src={s5.src} alt="Cervelo S5" />
            </picture>
            <div className="landing-grid flex">
                <div className="half">
                    <Image className="w-100" filename="landing0.jpg" />
                    <Image className="w-100" filename="landing2.jpg" />
                </div>
                <div className="half">
                    <Image className="w-100" filename="landing1.jpg" />
                    <Image className="w-100" filename="landing3.jpg" />
                </div>
            </div>
        </section>
    );
}
