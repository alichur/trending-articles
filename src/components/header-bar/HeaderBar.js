import React from 'react';
import MediumLogoSvg from './MediumLogoSmall.js';
import { container, button } from './HeaderBar.module.css';


function HeaderBar() {
    return <header class={container}>
        <MediumLogoSvg />
        <button class={button}>Get started</button>

    </header >
}

export default HeaderBar;