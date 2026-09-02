import Image from '../Image';

import './style.css';

function Footer() {
    return (
        <footer className="max-w-container">
            <div className="max-w column">
                <div className="title">
                    <h1>Bask Bikes LLC</h1>
                    <a href="https://www.instagram.com/baskbikes/" target="_blank">
                        <Image filename="instagram.png" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61564116557587" target="_blank">
                        <Image filename="facebook.png" />
                    </a>
                </div>
                <p>Austin, TX <span className="hyphen">-</span> © 2026</p>
            </div>
        </footer>
    );
}

export default Footer;
