import useWindowWidth from '../../../utils/useWindowWidth';

import Image from '../../../components/Image';

import './style.css';

interface GridImageProps {
    filename: string;
    alt?: string;
    gridArea: string;
}

function GridImage({ filename, alt, gridArea }: GridImageProps) {
    const imageStyle = { gridArea };
    return (
        <Image filename={filename} alt={alt} style={imageStyle} />
    );
}

function CarbonDescription() {
    return (
        <div className="service-description">
            <h3>Carbon Repair</h3>
            <p>$200 - $600 for most repairs</p>
            <p>I will repair most damage to carbon frames and blend it into the original paint. Contact me with photos for an estimate. I provide a 2-3 week turn around depending on the job but it can take 2 - 8 weeks for me to be able to take it into the shop. Rush turn around is available.</p>
        </div>
    );
}

function PaintDescription() {
    return (
        <div className="service-description">
            <h3>Custom Paint</h3>
            <p>I am willing to paint anything that can fit through a standard sized doorway.</p>
            <p>Sleek classics to hydro dipping, airbrushing, and traditional hand painted artwork from my partner Sabrina <a href="https://www.instagram.com/thrimbychardo/" target="_blank">@thrimbychardo.</a></p>
            <p>Contact me for a quote and to start the design process.</p>
        </div>
    );
}

function DecalDescription() {
    return (
        <div className="service-description">
            <h3>Refinishing and Decals</h3>
            <p>I can do all types of custom work!</p>
            <p>I make decals, anodize titanium, one off custom parts, restore old paint jobs with touch ups and new clear coat.</p>
            <p>One of my favorites is decals to cover up existing logos on a frame for a cheaper non permanent way to change the accent color of your bike.</p>
        </div>
    );
}

function MiscInfo() {
    let windowWidth = useWindowWidth();
    return (
        <div className="misc-info">
            {windowWidth > 700
                ? <p className="top-right">YOU CAN FIND MORE INFORMATION AND PORTFOLIO WITH THE LINKS ON THE TOP RIGHT</p>
                : <p className="top-right">YOU CAN FIND MORE INFORMATION AND PORTFOLIO WITH THE LINKS AT THE TOP</p>
            }
            <p>Preferred vendor for:
                <a href="http://www.austintricyclist.com/">Austin Tricyclist</a>,
                <a href="https://austinbikefarm.com/">Austin Bike Farm</a>,
                <a href="https://dogspeedcycles.com/">Dog Speed Cycles</a>,
                <a href="https://themeteor.cafe/bike">The Meteor (Austin)</a>
            </p>
            <p>And I have worked with <a href="https://www.specialized.com/us/en/store-finder/specialized-austin-south-warehouse/6405484">Specialized Austin</a></p>
        </div>
    );
}

export default function Services() {
    let windowWidth = useWindowWidth();

    return (
        <section className="services max-w-container">
            <div className="max-w column">
                <div className="image-showcase w-100 flex">
                    <div className="carbon half flex column justify-between">
                        <h2>Services</h2>
                        {windowWidth <= 700 ? <CarbonDescription /> : ""}
                        <div className="custom-image-grid h-100">
                            <GridImage filename="services/0.jpg" gridArea="span 7 / span 4" />
                            <GridImage filename="services/1.jpg" gridArea="span 7 / span 3" />
                            <GridImage filename="services/2.jpg" gridArea="span 7 / span 4" />
                            <GridImage filename="services/3.jpg" gridArea="span 5 / span 3" />
                            <GridImage filename="services/4.jpg" gridArea="span 5 / span 3" />
                            <GridImage filename="services/5.jpg" gridArea="span 5 / span 5" />
                        </div>
                    </div>
                    <div className="paint half">
                        {windowWidth <= 700 ? <PaintDescription /> : ""}
                        <div className="custom-image-grid h-100">
                            <GridImage filename="services/6.jpg" gridArea="span 5 / span 7" />
                            <GridImage filename="services/7.jpg" gridArea="span 3 / span 6" />
                            <GridImage filename="services/9.jpg" gridArea="span 10 / span 6" />
                            <GridImage filename="services/8.jpg" gridArea="span 8 / span 7" />
                        </div>
                    </div>
                    {windowWidth <= 700 ? <DecalDescription /> : ""}
                </div>
                {windowWidth > 700 ?
                    <div className="description-container">
                        <CarbonDescription />
                        <PaintDescription />
                        <DecalDescription />
                    </div>
                : ""}
                <MiscInfo />
            </div>
        </section>
    );
}
