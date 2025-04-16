import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header-logo">
        <div className="logo-container">

          <div>
            <h1>Clínica Smart Care</h1>
            <h2>Cuidando da sua saúde com excelência</h2>
          </div>
        </div>
      </header>

      <section>
        <h2>Nossos Serviços</h2>
        <p>Na Smart Care, acreditamos que cuidar da saúde é também cuidar de pessoas.</p>
        <p>Cada paciente é recebido com atenção, empatia e respeito às suas necessidades.</p>
        <p>Nosso time une conhecimento técnico e sensibilidade para oferecer um atendimento verdadeiramente humano.</p>
        <p>Aqui, você encontra mais do que consultas — encontra acolhimento, escuta e cuidado de verdade.</p>

        <div className="servicos">
          <img
            src="/assets/clinica.png"
            alt="Clínica Smart Care"
            className="imagem-clinica"
          />
        </div>
      </section>

      <section id="equipe">
        <h2>Corpo Clínico</h2>
        <div className="equipe">
          <div>
            <img src="/assets/medico_clinica_geral.png" alt="Clínica Geral" />
            <p><strong>Dra. Ana Souza – Clínica Geral</strong></p>
          </div>
          <div>
            <img src="/assets/medico_cardiologista.png" alt="Cardiologista" />
            <p><strong>Dr. Carlos Ribeiro – Cardiologista</strong></p>
          </div>
          <div>
            <img src="/assets/medico_endocrinologista.png" alt="Endocrinologista" />
            <p><strong>Dr. Ricardo Almeida – Endocrinologista</strong></p>
          </div>
        </div>
      </section>

      <section>
        <h2>Entre em Contato</h2>
        <form>
          <label>Nome: <input type="text" /></label>
          <label>E-mail: <input type="email" /></label>
          <label>Cidade: <input type="text" /></label>
          <label>Estado: <input type="text" /></label>
          <button type="button">Enviar</button>
        </form>
      </section>

    </div>
  );
}

export default LandingPage;
