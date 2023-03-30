function setValor(btnId) {
    const btn = document.getElementById(btnId);
    btn.classList.add('btn-selected');

// Remove a classe dos outros botões da mesma pergunta
    const pergunta = btnId.charAt(1);
    for (let i = 1; i <= 5; i++) {
        const outroBtnId = `p${pergunta}_${i}`;
        if (outroBtnId !== btnId) {
            const outroBtn = document.getElementById(outroBtnId);
            outroBtn.classList.remove('btn-selected');
        }
    }
}

let respostas = [0, 0, 0]; // array para armazenar as respostas do usuário

// função para definir a resposta do usuário para uma determinada pergunta
function setValor(btnId) {
  const btn = document.getElementById(btnId);

  // Remove a classe dos outros botões da mesma pergunta
  const pergunta = btnId.charAt(1);
  for (let i = 1; i <= 5; i++) {
    const id = 'p' + pergunta + '_' + i;
    const button = document.getElementById(id);
    button.classList.remove('btn-selected');
  }

  // Adiciona a classe ao botão selecionado
  btn.classList.add('btn-selected');

  // Armazena a resposta do usuário no array
  const resposta = parseInt(btn.innerText);
  respostas[pergunta - 1] = resposta;
}

// função para calcular a soma das respostas e exibir a mensagem de resultado
function calcular() {
  // verifica se o usuário respondeu todas as perguntas
  if (respostas.includes(0)) {
    alert('Por favor, responda todas as perguntas.');
    return;
  }

  // calcula a soma das respostas
  const soma = respostas.reduce((total, resposta) => total + resposta, 0);

  // exibe a mensagem de resultado
  const mensagem = document.getElementById('mensagem');
  if (soma > 13) {
    mensagem.innerText = 'Eu sou o candidato certo para você';
  } else {
    mensagem.innerText = 'Desculpe, não sou o candidato certo para você';
  }
}


