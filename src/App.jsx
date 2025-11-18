import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DonationForm from "./components/DonationForm";
import DonationsList from "./components/DonationsList";
import Contact from "./components/Contact";
import { getDonations } from "./services/api";

export default function App() {
  const [page, setPage] = useState("home");
  const [donations, setDonations] = useState([]);

  useEffect(() => setDonations(getDonations()), []);

  function refresh() {
    setDonations(getDonations());
  }

  return (
    <div className="app">
      <Header onNavigate={setPage} page={page} />
      <main className="container">
        {page === "home" && (
          <section className="hero">
            <h1>SSVP - Sistema de Doações</h1>
            <p className="lead">
              Faça o bem! Cadastre doações e acompanhe o impacto da sua ajuda.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => setPage("donate")}>Fazer Doação</button>
              <button className="btn outline" onClick={() => setPage("list")}>Ver Doações</button>
            </div>
          </section>
        )}
        {page === "donate" && <DonationForm onSuccess={refresh} />}
        {page === "list" && <DonationsList donations={donations} onChange={refresh} />}
        {page === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}