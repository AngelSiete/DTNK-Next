import SongItem from "./song-item";

export default function SongsGrid({ songs }) {
    return (
      <ul >
        {songs.map((song) => (
          <li key={song.id}>
            <SongItem {...song} />
          </li>
        ))}
      </ul>
    );
  }