'use client';

import { useParams } from "next/navigation"

export default function SongPage(){
    const {songSlug} = useParams();
    return(
        <>
        <p>Individual Song!</p>
        <p>{songSlug}</p>
        </>
    )
}