export default function ArtistItem({ artist }) {
    return (
        <div>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3>
        </div>
    )
}