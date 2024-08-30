import { getSongs} from "@/lib/songs";

export default async function(){
    const songs = await getSongs();
    console.log(songs)
    return(
        <div>
            <p>All songs</p>
        </div>
    )
}