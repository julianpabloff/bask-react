import ImageGrid from '../../components/ImageGrid';
import Project from './Project';

import './style.css';

export default function Paint() {
    return (
        <main>
            <section className="paint-page max-w-container">
                <div className="heading max-w column align-center">
                    <h1>Custom Paint</h1>
                    <div className="text-container flex">
                        <div>
                            <p>I can paint any bike and anything that will fit through a normal door frame. I have sand blasting for metal and an experienced hand for sanding carbon. I can make a design for you, with you, or restore/copy something existing. I also work with my partner Sabrina who I commission for incredible traditional hand painting on your bike.</p>
                            <p>I can also create custom vinyl decals to cover up your existing logos to change the accent color on your bike in a cheaper, non-permanent way. These are usually $100 - $300.</p>
                            <p>NEW Titanium anodizing! Custom bolts, logos, whatever you want.</p>
                            <p>I usually need the project for 3-8 weeks and scheduling can be 1 - 4 months out.</p>
                        </div>
                        <div>
                            <p>For quotes contact me for exact costs but for an idea:</p>
                            <p>$1000 for 2 color carbon frame with logos</p>
                            <p>$2000 for a more complicated multi-color unique design</p>
                            <p>$500 for a brand new clear coat on an existing paint job.</p>
                            <p><a href="mailto:johnw@baskbikes.com" target="_blank">JohnW@BaskBikes.com</a></p>
                        </div>
                    </div>
                </div>
                {/* old theme: #0b77a9 */}
                <Project
                    title="The Bask Bike"
                    folderPath="paint/projects/baskbike"
                    imageCount={4}
                    themeColor="rgba(34, 0, 95, 0.76)"
                >
                    <p>For this project I took a Trek Madong and took off all the shitty paint. Then I made a design mockup of a bunch of shapes you would see in some psychological visual test to determine if someone was retarded or not.</p>
                    <p>After applying those shapes to the frame, I painted it and then they were there on the frame, you know. I don't know, man...</p>
                    <p>This space is for if you want to talk about the project at all, the client exchange, story behind it, or parts of the process you want to brag about.</p>
                </Project>
                <Project
                    title="Trek Madone"
                    folderPath="paint/projects/madone"
                    imageCount={8}
                    themeColor="#0b77a9"
                >
                    <p>For this project I took a Trek Madong and took off all the shitty paint. Then I made a design mockup of a bunch of shapes you would see in some psychological visual test to determine if someone was retarded or not.</p>
                    <p>After applying those shapes to the frame, I painted it and then they were there on the frame, you know. I don't know, man...</p>
                    <p>This space is for if you want to talk about the project at all, the client exchange, story behind it, or parts of the process you want to brag about.</p>
                </Project>
                <Project
                    title="UTP5"
                    folderPath="paint/projects/utp5"
                    imageCount={11}
                    themeColor="rgb(153, 72, 0)"
                >
                    <p>Some old guy that never will ride this bike wanted me to go through countless hours of effort to paint a Cervelo P5 in the theme colors of the University of Texas.</p>
                    <p>It's just orange and white, so I painted some parts of the bike orange, while painting all other parts of the bike white. Idiot.</p>
                    <p>This space is for if you want to talk about the project at all, the client exchange, story behind it, or parts of the process you want to brag about.</p>
                </Project>
                <ImageGrid folderPath="paint" amount={49} extension="webp" imageWidth={1500} imageHeight={1125} />
            </section>
        </main>
    );
}
