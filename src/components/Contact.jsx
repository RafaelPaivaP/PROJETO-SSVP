import React, { useState } from "react";
export default function Contact(){
  const [sent,setSent]=useState(false);
  return sent?<p>Mensagem enviada!</p>:(
    <form onSubmit={e=>{e.preventDefault();setSent(true);}}>
      <input placeholder="Seu nome" required/>
      <input placeholder="Seu e-mail" type="email" required/>
      <textarea placeholder="Mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}