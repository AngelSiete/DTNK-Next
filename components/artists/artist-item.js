export default function ArtistItem({ artist }) {
    return (
        <div>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3>
            <div>
                {artist.socials.spotify && <a href={artist.socials.spotify} target="_blank">Spotify</a>}
                {artist.socials.instagram && <a href={artist.socials.instagram} target="_blank">Instagram</a>}
                {artist.socials.facebook && <a href={artist.socials.facebook} target="_blank">Facebook</a>}
            </div>
        </div>
    )
}