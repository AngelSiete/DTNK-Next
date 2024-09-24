export function getArtists() {
    const dummyArtists = [
        {
            name: "Artist 1",
            image: "https://via.placeholder.com/150",
            socials: {
                spotify: "https://open.spotify.com/artist/artist1",
                instagram: "https://instagram.com/artist1",
                facebook: "https://facebook.com/artist1",
            }
          },
          {
            name: "Artist 2",
            image: "https://via.placeholder.com/150",
            socials: {
                spotify: "https://open.spotify.com/artist/artist2",
                instagram: "",
                facebook: "https://facebook.com/artist2",
            }
          },
    ]
    return dummyArtists;
  }