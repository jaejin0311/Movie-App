import React from 'react';
import Logo from './Logo';

const Header = () => (
    <header>
        <div className = "f1">
            <button type="button">
                <img src='./images/menu.png' alt = "View Messages" width="30px"/>
            </button>
        </div>

        <div className = "f1">
            <Logo />
        </div>

        <div className = "f1">
            <button type="button">
                <img src="./images/user.png" alt = "User Setting" width="30px"/>
            </button>
        </div>
    </header>
    
);

export default Header;