import Link from "next/link";

export default function Header(){
    
    return(
        <header >
            <nav className='w-full py-8 md:pt-8 text-center flex flex-col md:flex-row border-2 border-gray-300'>
            <Link className='w-screen hover:text-white hover:text-2xl md:order-1' href="/">D I T I L E N K O</Link>
            <Link className="w-full md:order-0 hover:text-white hover:text-xl" href="/songs">Browse all songs </Link>
            <Link className="w-full md:order-2 hover:text-white hover:text-xl" href="/artists">Browse all Diti-Artists </Link>
            </nav>
        </header>
    )
}