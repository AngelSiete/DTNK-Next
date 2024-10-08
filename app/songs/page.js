import { getSongs} from "@/lib/songs";
import { Suspense } from "react";
import SongsGrid from "@/components/songs/songs-grid";

async function Songs() {
    const songs = await getSongs();
    return <SongsGrid songs={songs} />;
  }

export default async function(){
    return(
        <main>
        <Suspense fallback={<p>Cargando canciones</p>}>
          <Songs />
        </Suspense>
      </main>
    )
}