import ImageGrid from '../../components/ImageGrid';

import './style.css';

export default function Paint() {
    return (
        <>
            <section className="paint-page max-w-container">
                <div className="heading max-w column align-center">
                    <h1>Custom Paint</h1>
                    <div className="text-container flex">
                        <div>
                            <p>I can paint any bike and anything that will fit through a normal door frame. I have sand blasting for metal and an experienced hand for sanding carbon. I can make a design for you, with you, or restore/copy something existing. I also work with my partner Sabrina who I commission for incredible traditional hand painting on your bike.</p>
                            <p>I can also create custom vinyl decals to cover up your existing logos to change the accent color on your bike in a cheaper, non-permanent way. These are usually $100 - $200.</p>
                            <p>NEW Titanium anodizing! Custom bolts, logos, whatever you want.</p>
                            <p>I usually need the project for 3-8 weeks and scheduling can be 1 - 4 months out.</p>
                        </div>
                        <div>
                            <p>For quotes contact me for exact costs but for an idea:</p>
                            <p>$1000 for 2 color carbon frame with logos</p>
                            <p>$2000 for a more complicated multi-color unique design</p>
                            <p>$500 for a brand new clear coat on an existing paint job.</p>
                            <p><a href="mailto:johnw@baskbikes.com">JohnW@BaskBikes.com</a></p>
                        </div>
                    </div>
                </div>
                <ImageGrid folderPath="paint" amount={49} extension="webp" />
            </section>
        </>
    );
}
