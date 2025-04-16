import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FormAgendamento() {
  const [especialidades, setEspecialidades] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [form, setForm] = useState({
    paciente_nome: '',
    paciente_cpf: '',
    especialidadeId: '',
    profissionalId: '',
    data_consulta: '',
    hora_consulta: ''
  });

  // Carrega especialidades
  useEffect(() => {
    axios.get('http://localhost:3001/api/especialidades')
      .then(res => setEspecialidades(res.data))
      .catch(err => console.error('Erro ao carregar especialidades', err));
  }, []);

  // Carrega profissionais quando a especialidade muda
  useEffect(() => {
    if (form.especialidadeId) {
      axios.get(`http://localhost:3001/api/profissionais?especialidadeId=${form.especialidadeId}`)
        .then(res => setProfissionais(res.data))
        .catch(err => console.error('Erro ao carregar profissionais', err));
    } else {
      setProfissionais([]);
    }
  }, [form.especialidadeId]);

  // Atualiza os campos e força especialidadeId a ser número
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'especialidadeId' ? parseInt(value) : value
    });
  };

  // Envia e reseta o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/agendamentos', form)
      .then(() => {
        alert('Agendamento realizado com sucesso!');
        // Limpar campos
        setForm({
          paciente_nome: '',
          paciente_cpf: '',
          especialidadeId: '',
          profissionalId: '',
          data_consulta: '',
          hora_consulta: ''
        });
        setProfissionais([]);
      })
      .catch(err => {
        alert('Erro ao agendar consulta');
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Agendar Consulta</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="paciente_nome"
          placeholder="Nome"
          value={form.paciente_nome}
          onChange={handleChange}
          required
        />
        <input
          name="paciente_cpf"
          placeholder="CPF"
          value={form.paciente_cpf}
          onChange={handleChange}
          required
        />

        <select
          name="especialidadeId"
          value={form.especialidadeId}
          onChange={handleChange}
          required
        >
          <option value="">Selecione a especialidade</option>
          {especialidades.map(e => (
            <option key={e.id} value={e.id}>{e.nome}</option>
          ))}
        </select>

        <select
          name="profissionalId"
          value={form.profissionalId}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o profissional</option>
          {profissionais.map(p => (
            <option key={p.id} value={p.id}>{p.nome}</option>
          ))}
        </select>

        <input
          type="date"
          name="data_consulta"
          value={form.data_consulta}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="hora_consulta"
          value={form.hora_consulta}
          onChange={handleChange}
          required
        />
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
}

export default FormAgendamento;
