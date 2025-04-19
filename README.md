
# 🩺 Smart Care - Sistema de Agendamento de Consultas

Aplicação web desenvolvida para a clínica **Smart Care**, com funcionalidades completas de agendamento de consultas médicas, organização por especialidades, gerenciamento de profissionais e infraestrutura moderna utilizando containers Docker e banco de dados PostgreSQL.

---

## 📁 Estrutura do Projeto

```
/smart-care/
│
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── database.js
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   │   └── assets/
│   │       ├── clinica.png
│   │       ├── fundo-saude.jpg
│   │       ├── logo-smartcare.png
│   │       ├── medico_cardiologista.png
│   │       ├── medico_clinica_geral.png
│   │       └── medico_endocrinologista.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── ConsultaCPF.jsx
│   │   │   ├── FormAgendamento.jsx
│   │   │   ├── Header.jsx
│   │   │   └── LandingPage.jsx
│   │   ├── header.css
│   │   ├── LandingPage.css
│   │   ├── app.css
│   │   ├── app.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── docker-compose.yml
└── README.md

```

---

## 🚀 Funcionalidades

- Exibição de especialidades médicas: Endocrinologia, Cardiologia e Clínica Geral
- Listagem de profissionais por especialidade (dinâmica)
- Escolha de datas e horários disponíveis
- Agendamento de consulta com Nome e CPF
- Reset automático dos campos após envio do formulário
- Consulta de agendamentos por CPF (com limpeza automática do campo)
- Formulário "Entre em Contato" funcional e limpo após envio
- Interface centralizada e responsiva
- Cancelamento de agendamento
- Armazenamento dos dados em PostgreSQL
- Deploy automatizado via Docker Compose

---

## 🧰 Tecnologias Utilizadas

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Banco de Dados**: PostgreSQL
- **Containers**: Docker + docker-compose

---

## 🎨 Experiência do Usuário

- Layout centralizado e intuitivo
- Estilização com CSS moderno e responsivo
- Feedback visual após envio dos formulários
- Interface leve e funcional para desktop e mobile

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Passos para execução:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/smart-care.git
cd smart-care

# Execute os containers
docker-compose down
docker-compose up --build
```

- Acesse o **Frontend**: http://localhost:5173  
- Acesse a **API (Backend)**: http://localhost:3001

---

## 🗃️ Estrutura do Banco de Dados

- `especialidades`: id, nome
- `profissionais`: id, nome, especialidade_id
- `agendamentos`: id, paciente_nome, paciente_cpf, profissional_id, data_consulta, hora_consulta, status

---

## 📷 Imagens do Projeto

- public/assets/clinica.png
- public/assets/medica_clinica_geral.png
- public/assets/medico_cardiologista.png
- public/assets/medico_endocrinologista.png

## 🛠️ Problemas comuns e soluções

- ❌ Porta 3001 ou 5173 em uso: use `lsof -i :PORTA` e `kill -9 PID`
- ❌ Docker não sobe: certifique-se de que o Docker Desktop está rodando

---

## 👩‍💻 Desenvolvido por
Juliana Machado Mendes Castro