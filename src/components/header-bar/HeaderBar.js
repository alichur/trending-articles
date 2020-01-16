import React from 'react';
import MediumLogoSvg from './MediumLogoSmall.js';
import SearchIcon from './SearchIcon.js';
import { container, button, actions, search, member, signIn } from './HeaderBar.module.css';

// This header is for CSS demo purposes only and the items have no function.

function HeaderBar() {
    return <header className={container}>
        <MediumLogoSvg />
        <div className={actions}>
            <SearchIcon className={search} />
            <a className={member} href="#">Become a member</a>
            <a className={signIn} href="#">Sign in</a>
            <button className={button}>Get started</button>
        </div>
    </header >
}

export default HeaderBar;