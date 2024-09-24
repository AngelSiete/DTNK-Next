import { Suspense } from "react";
import { getArtists} from "@/lib/artists";
import ArtistsGrid from "@/components/artists/artists-grid";

const dummyArtists = [
  {
    name: "Artist 1",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Artist 2",
    image: "https://via.placeholder.com/150",
  },
];
async function Artists() {
  const artists = await getArtists();
  return <ArtistsGrid artists={artists} />;
}
export default function () {
  return (
    <main>
      <Suspense fallback={<p>Cargando artistas</p>}>
        <Artists />
      </Suspense>
    </main>
  );
}
