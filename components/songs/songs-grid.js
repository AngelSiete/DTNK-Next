import SongItem from "./song-item";

export default function SongsGrid({ songs }) {
    return (
      <ul className="[&>*:nth-child(odd)]:md:flex-row [&>*:nth-child(even)]:md:flex-row-reverse">
        {songs.map((song) => (
            <SongItem {...song} key={song.id}/>
        ))}
      </ul>
    );
  }