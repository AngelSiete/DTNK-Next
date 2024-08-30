import Link from 'next/link';
import Image from 'next/image';

export default function SongItem({ title, slug, image, producer, date }) {
    return (
      <article >
        <header>
          <div >
            <Image src={image} alt={title} width='250' height='250' />
          </div>
          <div>
            <h2>{title}</h2>
          </div>
        </header>
        <div>
          <p >{producer}</p>
          <div>
            <Link href={`/songs/${slug}`}>View Details</Link>
          </div>
        </div>
      </article>
    );
  }