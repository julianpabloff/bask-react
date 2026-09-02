import useWindowWidth from '../../../utils/useWindowWidth';
import Image from '../../../components/Image';

import './style.css';

export default function Landing() {
    let windowWidth = useWindowWidth();

    return (
        <section className="landing-images">
            {windowWidth > 600
                ? <Image filename="s5.jpg" alt="Cervelo S5" className="main" />
                : <Image filename="s5-mobile.jpg" alt="Cervelo S5" className="main" />
            }
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
