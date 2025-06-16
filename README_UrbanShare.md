
# 🚗 UrbanShare

**UrbanShare** é um sistema web simples para **compartilhamento de vagas de garagem** entre moradores da mesma região, visando melhorar a mobilidade urbana, reduzir a poluição e promover o uso mais inteligente dos espaços urbanos.

---

## 🧠 Ideia do Projeto

Nas grandes cidades, muitos motoristas enfrentam dificuldade para estacionar, enquanto diversas garagens permanecem vazias durante o dia. O UrbanShare surge como uma solução colaborativa, permitindo que os moradores cadastrem e consultem vagas disponíveis em tempo real.

---

## 🔧 Tecnologias Utilizadas

### 📦 Back-End
- Node.js
- Express.js
- SQLite3

### 🖥️ Front-End
- HTML5
- CSS3
- JavaScript (puro, sem frameworks)

---

## 📁 Estrutura do Projeto

```
urbanshare/
├── backend/
│   ├── server.js
│   ├── db/
│   │   └── database.js
│   └── routes/
│       └── vagas.js
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
```

---

## 🚀 Como Executar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/VladeJr/AEP-Parte-2---Unicesmar.git
cd urbanshare/backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
node server.js
```

O servidor iniciará em `http://localhost:3000`.

### 4. Acesse o Front-End

Abra o arquivo `frontend/index.html` no navegador (clique duas vezes ou arraste para o Chrome/Edge/Firefox).

---

## 🧪 Teste da API

Você pode usar o Postman para testar:

- **GET** `http://localhost:3000/vagas` → retorna todas as vagas disponíveis.
- **POST** `http://localhost:3000/vagas`

```json
{
  "endereco": "Rua Exemplo, 456",
  "horario": "08:00 - 18:00"
}
```

---

## 📌 Funcionalidades

- Cadastro de vagas por endereço e horário
- Listagem de vagas disponíveis
- Comunicação entre front-end e back-end
- Armazenamento local via banco de dados SQLite

---

## 👥 Desenvolvedores

- Lucas Leal Cardoso — RA: 220157772  
- Vlademir Vinhoto — RA: 2201419522

---

## 📂 Licença

Este projeto foi desenvolvido como parte do **Desafio Profissional (AEP)** da **Unicesumar** e não possui fins comerciais.
