import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
    return (
        <header>
            <div className="header">
                <h1 className='header__logo'>
                    <span id='first'>Zaplanuj</span>
                    <span id='second'>Jedzonko</span>
                </h1>
                <nav className='header__nav'>
                    <ul>
                        <li>
                            <Link to='/#goToApp'>Zaplanuj posiłki!</Link>
                        </li>
                        <li>
                            <Link to='/#aboutApp'>Dlaczego warto?</Link>
                        </li>
                        <li>
                            <Link to='/#aboutMe'>O mnie</Link>
                        </li>
                        <li>
                            <Link to='/#contact'>Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div> 
        </header>
    )
}

export default Header;