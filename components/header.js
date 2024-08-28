import Link from "next/link";
import NavLink from "./nav-link";
import classes from './header.module.css'

export default function Header(){
    
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">D I T I L E N K O</Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse all Meals </NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Browse our Communities </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}