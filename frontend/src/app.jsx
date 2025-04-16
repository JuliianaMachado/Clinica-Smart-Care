import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import FormAgendamento from './components/FormAgendamento';
import ConsultaCPF from './components/ConsultaCPF';
import './app.css'; 

function App() {
  return (
    <>
      <Header />
      <section id="landing">
        <LandingPage />
      </section>
      <hr />
      <section id="agendamento">
        <FormAgendamento />
      </section>
      <hr />
      <section id="consulta">
        <ConsultaCPF />
      </section>
      <footer>
        <p>© 2025 Clínica Smart Care. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
