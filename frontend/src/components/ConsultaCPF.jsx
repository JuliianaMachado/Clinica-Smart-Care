import React, { useState } from 'react';
import axios from 'axios';
import './LandingPage.css'; // ou crie um css separado se preferir

function ConsultaCPF() {
  const [cpf, setCpf] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

  const buscar = () => {
    axios.get(`http://localhost:3001/api/agendamentos?cpf=${cpf}`)
      .then(res => setAgendamentos(res.data));
  };

  const cancelar = (id) => {
    axios.delete(`http://localhost:3001/api/agendamentos/${id}`)
      .then(() => {
        alert("Agendamento cancelado.");
        buscar();
      });
  };

  return (
    <div className="consulta-wrapper">
      <h2>Consultar Agendamentos</h2>
      <div className="consulta-container">
        <input
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
        <button onClick={() => {
          buscar();
          setCpf('');
        }}>
          Buscar
        </button>
      </div>

      <ul className="lista-agendamentos">
        {agendamentos.map(a => (
          <li key={a.id}>
            {a.data_consulta} às {a.hora_consulta} - {a.status}
            <button onClick={() => cancelar(a.id)}>Cancelar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConsultaCPF;
