import Image from '../../../components/Image';
import s5 from '../../../assets/s5.jpg';
import s5Mobile from '../../../assets/s5-mobile.jpg';

import './style.css';

export default function Landing() {
    return (
        <section className="landing-images">
            <picture>
                <source media="(width <= 600px)" srcSet={s5Mobile} />
                <source media="(width > 600px)" srcSet={s5} />
                <img className="main" src={s5} alt="Cervelo S5" />
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
