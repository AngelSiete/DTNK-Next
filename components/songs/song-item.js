import Link from 'next/link';
import Image from 'next/image';

export default function SongItem({ title, slug, image, producer, date }) {
    return (
      <article className="my-4 md:flex md:justify-evenly md:items-center">
        <header>
          <div >
            <Image src={image} alt={title} width='500' height='250' />
          </div>
          <div>
            <h2 className="text-4xl text-white text-center">{title}</h2>
          </div>
        </header>
        <div>
          <p className="text-center text-gray-400">Produced by {producer}</p>
          <div className="text-center">
            <Link href={`/songs/${slug}`} className="text-2xl text-white text-center hover:text-3xl">View Details</Link>
          </div>
          <p className="text-center text-gray-400">Launched in {date}</p>
        </div>
      </article>
    );
  }