import ImageGrid from '../../components/ImageGrid';

import './style.css';

export default function Carbon() {
    return (
        <>
            <section className="carbon-page max-w-container">
                <div className="heading max-w column align-center">
                    <h1>Carbon Repair</h1>
                    <div>
                        <p>Carbon repair saves your old frame from the trash and is more affordable than replacing most of the time. I use wet lay and pre-preg carbon with vacuum bagging to repair bike frames and any composite structure. I pride myself in smooth and seamless repairs and offer complete paint matching/restoration, but we can also “leave the battle scars” for less cost and time if necessary.</p>
                        <p>As long as we are working locally I can strip any of the necessary components.</p>
                        <p>A majority of repairs will be $200 - $400 but it can get more expensive depending on severity and paint matching, I’m happy to provide an estimate with photos but the extent of damage is never known until a there is a full frame inspection in the workshop.</p>
                    </div>
                </div>
                <ImageGrid folderPath="carbon" amount={77} extension="webp" />
            </section>
        </>
    );
}
