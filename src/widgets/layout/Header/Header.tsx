import {useEffect, useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import logo from 'assets/icons/logo.svg'
import menu from 'assets/icons/burger-menu.svg'

import style from './Header.module.scss'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const menuBtnRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleTouchStart = (e: TouchEvent) => {
        if ((navRef.current && !navRef.current.contains(e.target as Node)) && (!menuBtnRef.current?.contains(e.target as Node))) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("touchstart", handleTouchStart, { passive: true });

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <>
            <header className={`app_width ${style.header}`}>
                <img src={logo} className={style.logo} alt={'logo'}/>
                <nav className={`${style.nav_container} ${isOpen ? style.active_nav : ''}`} ref={navRef}>
                    <ul className={style.nav}>
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) => (isActive ? style.active_link : '')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                     className={({isActive}) => (isActive ? style.active_link : '')}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/a123">ErrorPage</NavLink>
                        </li>
                    </ul>
                </nav>
                <button className={style.btn_menu} onClick={toggleMenu} ref={menuBtnRef}>
                    <img src={menu} alt={'menu'}/>
                </button>
            </header>
            <hr className={style.line}/>
        </>
    )
}