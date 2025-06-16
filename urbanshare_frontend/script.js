
const form = document.getElementById('vagaForm');
const lista = document.getElementById('vagasList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const endereco = document.getElementById('endereco').value;
  const horario = document.getElementById('horario').value;

  await fetch('http://localhost:3000/vagas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ endereco, horario })
  });

  form.reset();
  carregarVagas();
});

async function carregarVagas() {
  const res = await fetch('http://localhost:3000/vagas');
  const vagas = await res.json();

  lista.innerHTML = '';
  vagas.forEach(vaga => {
    const li = document.createElement('li');
    li.textContent = `Endereço: ${vaga.endereco} | Horário: ${vaga.horario}`;
    lista.appendChild(li);
  });
}

carregarVagas();
