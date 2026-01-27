import Image from '../../../components/Image';

import './style.css';

export default function About() {
    return (
        <section className="about max-w-container">
            <div className="max-w">
                <div className="image half flex justify-center">
                    <Image filename="jump.jpg" className="w-100" />
                </div>
                <div className="text half flex column justify-center">
                    <h2>About Bask</h2>
                    <p>My name is John Wiley, I am an extremely avid cyclist from BMX, Dirt jumping, MTB all the way to road. I have been biking my whole life and working in the bike industry for 10 years. I am a top level mechanic with extensive knowledge from full suspension to a specialty in TT bikes. I am a general expert in all things bikes and very passionate about what I do. If I can’t answer your question I can certainly figure out how to.</p>
                </div>
            </div>
        </section>
    );
}
