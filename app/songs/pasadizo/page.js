"use client";

import {shareSong} from "@/lib/actions";
import ImagePicker from "@/components/songs/image-picker";
import { useEffect, useState } from "react";

export default function ShareSongPage() {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(()=>{
    const value = localStorage.getItem("logged")
    if (value && value === 'true'){
      setIsAuthed(true);
    }
  },[])

  return (
      <>
      {isAuthed && <NewSongForm />}
      {!isAuthed && <Identifier onLoggedIn={() => setIsAuthed(true)} />}
      </>
  );
};

function Identifier({onLoggedIn}){

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get('text')
    const password = formData.get('password')
    const envEmail = process.env.NEXT_PUBLIC_EMAIL
    const envPass = process.env.NEXT_PUBLIC_PASSWORD
    if(email === envEmail && password === envPass){
      onLoggedIn()
      localStorage.setItem("logged", 'true')
    }
  }
  return(
    <div className="w-2/3 h-80 flex justify-center align-middle m-auto mt-40 bg-slate-500 rounded-md py-5 my-2 flex-col">
    <p className="text-white text-xl text-center">Identifícate antes de hacer nada :)</p>
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
    <input type="text" name="text" placeholder="text"  className="my-6 mx-20 w-2/3 m-auto" required></input>
    <input type="password" name="password" placeholder="Password" className="mx-20 w-2/3 m-auto" required></input>
    <button type="submit" className="rounded-full mt-6 hover:text-white bg-white hover:bg-slate-300 w-20 m-auto text-xl" >Login</button>
    </form>
    </div>
  )
};

function NewSongForm(){
  useEffect(()=>{
    setTimeout(() => {
      localStorage.setItem("logged", '')
    }, 600000);
  },[])
  return(
  <div className="w-2/3 h-max flex justify-center align-middle m-auto mt-40 bg-slate-500 rounded-md py-5 my-2 flex-col">
    <p>Datos de la nueva canción:</p>
    <form className="flex flex-col" action={shareSong}>
    <p>Nombre:</p>
    <input type="text" name="title" placeholder="nombre"  className="my-6 mx-20"></input>
    <p>Fecha:</p>
    <input type="text" name="date" placeholder="fecha" className="mx-20"></input>
    <p>Imagen:</p>
    <ImagePicker label="your image" name="image"/>
    <p>Productor:</p>
    <input type="text" name="producer" placeholder="productor" className="mx-20"></input>
    <button type="submit" className="rounded-full mt-6 hover:text-white bg-white hover:bg-slate-300 w-60 m-auto" >Añadir canción</button>
    </form>
    </div>
  )
};