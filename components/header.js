import Link from "next/link";
import NavLink from "./nav-link";

export default function Header(){
    
    return(
        <header >
            <nav className='w-full mt-4 text-center md:flex'>
            <Link className='w-screen hover:text-white hover:text-xl' href="/">D I T I L E N K O</Link>
            <NavLink className="w-full" href="/songs">Browse all songs </NavLink>
            <NavLink className="w-full" href="/community">Browse our Communities </NavLink>
            </nav>
        </header>
    )
}