import { NavLink } from "react-router-dom"

export const Menu = () => {
    return (
        <header>
            <img src='images/logo_clair.png' alt='logo magic book' />
            <nav>
                <ul>
                    <li><NavLink to='/' className={({isActive}) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}