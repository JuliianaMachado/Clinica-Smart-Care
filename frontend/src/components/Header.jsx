import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/assets/logo-smartcare.png"
          alt="Logo Smart Care"
          className="logo-topo"
        />
        <div className="titulo-centralizado">
          <h1>Clínica Smart Care</h1>
        </div>
        <div className="espaco-vazio" /> {/* Para balancear visualmente */}
      </div>
      <nav>
        <a href="#landing">Início</a>
        <a href="#equipe">Corpo Clínico</a>
        <a href="#agendamento">Agendamento</a>
        <a href="#consulta">Consultar Agendamentos</a>
      </nav>
    </header>
  );
}

export default Header;
