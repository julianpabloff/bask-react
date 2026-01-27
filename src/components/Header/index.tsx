import { useState } from 'react';
import useScrollY from '../../utils/useScrollY';

import logo from '../../assets/logo.png';

import './style.css';

function Header() {
    const [opacity, setOpacity] = useState<number>(1);
    const headerStyle = { backgroundColor: `rgba(0, 46, 65, ${opacity.toString()}` };

    function handleOpacity(scrollPos: number): void {
        const start = 0.2;
        const end = 0.7;
        const threshold = 100;
        const newOpacity = scrollPos >= threshold ? end : start + scrollPos / threshold;
        setOpacity(newOpacity);
    }
    useScrollY(handleOpacity);

    return (
        <header id="header" className="max-w-container" style={headerStyle}>
            <div className="max-w justify-between">
                <a href="/">
                    <img className="logo" src={logo} />
                </a>
                <nav className="flex align-center">
                    <a href="/carbon-repair">Carbon Repair</a>
                    <a href="/custom-paint">Custom Paint</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
