import React from "react";
import { deleteDonation } from "../services/api";
export default function DonationsList({ donations, onChange }) {
  return (
    <div>
      <h3>Doações Registradas</h3>
      {donations.length===0?<p>Nenhuma doação ainda.</p>:
        donations.map(d=>(
          <div key={d.id} style={{background:'#fff',margin:'8px',padding:'8px',borderRadius:'8px'}}>
            <strong>{d.name}</strong> - {d.type}
            <p>{d.description}</p>
            <button onClick={()=>{deleteDonation(d.id);onChange();}}>Remover</button>
          </div>
        ))}
    </div>
  );
}