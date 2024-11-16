import {NavLink} from "react-router-dom";
import logo from 'assets/icons/logo.svg'
import style from './Header.module.scss'

export const Header = () => {
    return (
        <>
            <header className={`app_width ${style.header}`}>
                <img src={logo} className={style.logo} alt={'logo'}/>
                <nav className={style.nav_container}>
                    <ul className={style.nav}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? style.active_link : '')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? style.active_link : '')} >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/a123">ErrorPage</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr className={style.line}/>
        </>
    )
}