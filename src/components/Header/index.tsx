import { useState } from 'react';
import useScrollY from '../../utils/useScrollY';

import { NavLink } from 'react-router';
import Image from '../../components/Image';

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
                <NavLink to="/">
                    <Image filename="logo.png" className="logo" />
                </NavLink>
                <nav className="flex align-center">
                    <NavLink to="/carbon-repair">Carbon Repair</NavLink>
                    <NavLink to="/custom-paint">Custom Paint</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
