import React, { useState } from "react";
import { addDonation } from "../services/api";

export default function DonationForm({ onSuccess }) {
  const [form, setForm] = useState({ name: "", type: "Alimento", description: "" });
  function submit(e){e.preventDefault();addDonation(form);onSuccess();}
  return (
    <form onSubmit={submit}>
      <input placeholder="Nome do doador" onChange={e=>setForm({...form,name:e.target.value})}/>
      <select onChange={e=>setForm({...form,type:e.target.value})}>
        <option>Alimento</option><option>Roupas</option><option>Outros</option>
      </select>
      <textarea placeholder="Descrição" onChange={e=>setForm({...form,description:e.target.value})}></textarea>
      <button type="submit">Registrar</button>
    </form>
  );
}