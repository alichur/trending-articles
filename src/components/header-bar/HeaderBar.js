import React from 'react';
import MediumLogoSvg from './MediumLogoSmall.js';
import { container, button } from './HeaderBar.module.css';


function HeaderBar() {
    return <header className={container}>
        <MediumLogoSvg />
        <button className={button}>Get started</button>

    </header >
}

export default HeaderBar;