import Link from "next/link";

export default function Header(){
    
    return(
        <header >
            <nav className='w-full mt-8 md:mt-14 text-center flex flex-col md:flex-row'>
            <Link className='w-screen hover:text-white hover:text-2xl md:order-1' href="/">D I T I L E N K O</Link>
            <Link className="w-full md:order-0 hover:text-white hover:text-xl" href="/songs">Browse all songs </Link>
            <Link className="w-full md:order-2 hover:text-white hover:text-xl" href="/community">Browse all Diti-Artists </Link>
            </nav>
        </header>
    )
}