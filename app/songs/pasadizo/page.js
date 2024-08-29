"use client";

import { useState } from "react";

export default function ShareSongPage() {
  const [isAuthed, setIsAuthed] = useState(false);

  return (
      <>
     {!isAuthed && <Identifier onLoggedIn={() => setIsAuthed(true)} />}
      {isAuthed && <p>Authed!</p>}
      </>
  );
};

function Identifier({onLoggedIn}){

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const envEmail = process.env.EMAIL
    const envPass = process.env.PASSWORD
    console.log(envEmail)
    // if(email === envEmail && password === envPass){
      if(email === 'test2@test.com' && password === 'test'){
      console.log('authed!')
      onLoggedIn()
    }
  }
  return(
    <div className="w-2/3 h-80 flex justify-center align-middle m-auto mt-40 bg-slate-500 rounded-md py-5 my-2 flex-col">
    <p>Identifícate antes de hacer nada :)</p>
    <form onSubmit={handleSubmit} >
    <input type="email" name="email" placeholder="Email"  className="my-6 mx-20"></input>
    <input type="password" name="password" placeholder="Password" className="mx-20"></input>
    <button type="submit" className="rounded-full mt-6 hover:text-white bg-white hover:bg-slate-300 w-20 m-auto" >Login</button>
    </form>
    </div>
  )
}