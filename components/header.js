import Link from "next/link";

export default function Header(){
    
    return(
        <header >
            <nav className='w-full mt-4 text-center flex flex-col md:flex-row'>
            <Link className='w-screen hover:text-white hover:text-xl md:order-1' href="/">D I T I L E N K O</Link>
            <Link className="w-full md:order-0" href="/songs">Browse all songs </Link>
            <Link className="w-full md:order-2" href="/community">Browse our Communities </Link>
            </nav>
        </header>
    )
}