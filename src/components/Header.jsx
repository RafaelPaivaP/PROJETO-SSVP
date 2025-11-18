import React from "react";
export default function Header({ onNavigate, page }) {
  return (
    <header style={{background:'#1e3a8a',color:'white',padding:'10px'}}>
      <h2>Sociedade São Vicente de Paulo</h2>
      <nav>
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('donate')}>Fazer Doação</button>
        <button onClick={() => onNavigate('list')}>Doações</button>
        <button onClick={() => onNavigate('contact')}>Contato</button>
      </nav>
    </header>
  );
}