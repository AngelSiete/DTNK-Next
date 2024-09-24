import ArtistItem from "./artist-item";

export default function ArtistsGrid({ artists }) {
    return (
        <div>
            {artists.map((artist) => (
                <ArtistItem key={artist.name} artist={artist} />
            ))}
        </div>
    )
}