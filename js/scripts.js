// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Considerando os seguintes identificadores: BJ153, K7, NOTA/2, AWQ* ,P&AA ,INP5, 5X. Quantos deles são inválidos?',
    answers: [
      {
        answer: '2',
        correct: false,
      },
      {
        answer: '3',
        correct: false,
      },
      {
        answer: '4',
        correct: true,
      },
      {
        answer: '5',
        correct: false,
      },
    ],
  },
  {
    question: 'A estrutura de dados de iteração na qual uma ação será executada pelo menos uma vez, antes da avaliação da condição, é implementada pelo comando básico:',
    answers: [
      {
        answer: 'se...então',
        correct: false,
      },
      {
        answer: 'repita...até_que',
        correct: true,
      },
      {
        answer: 'enquanto...faça',
        correct: false,
      },
      {
        answer: ' caso...fim_caso',
        correct: false,
      },
    ],
  },
  {
    question: 'A execução de uma expressão lógica obedece como prioridade a ordem dos operadores:',
    answers: [
      {
        answer: 'NÃO / E / OU',
        correct: true,
      },
      {
        answer: 'OU / E / NÃO',
        correct: false,
      },
      {
        answer: 'E / OU / NÃO',
        correct: false,
      },
      {
        answer: 'NÃO / OU / E',
        correct: false,
      },
    ],
  },
  {
    question: `Analise as alternativas abaixo, e informe quais as afirmativas corretas:

I – Toda variável do tipo real tem a possibilidade de receber valores inteiros;
II – As variáveis do tipo Lógico aceitam valores falsos e verdadeiros;
III – Variáveis do tipo caracter, são caracterizados por sequências de números, letras, símbolos e devem ser indicados em ter aspas;
IV – O nome de uma variável poderá possuir espaços em branco;`,
    answers: [
      {
        answer: 'I e III',
        correct: false,
      },
      {
        answer: 'I, II, III e IV',
        correct: false,
      },
      {
        answer: 'I, II e III',
        correct: true,
      },
      {
        answer: 'I, III, IV',
        correct: false,
      },
    ],
  },
  {
    question: 'Considerando a estrutura TABELA [1..8, 1..5], assinale a afirmativa correta:',
    answers: [
      {
        answer: 'A matriz tem 5 linhas, 8 colunas e 40 elementos;',
        correct: false,
      },
      {
        answer: 'A matriz tem 8 linhas, 5 colunas e no mínimo 40 elementos;',
        correct: false,
      },
      {
        answer: ' A matriz tem 5 linhas, 8 colunas e podem ser armazenados até 40 elementos;',
        correct: true,
      },
      {
        answer: 'A matriz tem 7 linhas, 4 colunas e podem ser armazenados até 28 elementos;',
        correct: false,
      },
    ],
  },
  {
    question: 'Assinale a alternativa correta sobre as estruturas de controle do tipo laços ou malhas de repetição:',
    answers: [
      {
        answer: 'Laços de repetição são utilizados quando é necessário efetuar a repetição de um trecho de programa um determinado número de vezes.',
        correct: true,
      },
      {
        answer: 'Não existem estruturas de controle do tipo malha de repetição que execute um teste lógico no início do looping.',
        correct: false,
      },
      {
        answer: 'Não existem estruturas de controle do tipo malha de repetição que execute um teste lógico no final do looping. ',
        correct: false,
      },
      {
        answer: 'Enquanto..faça é uma estrutura de controle do tipo teste lógico no fim do looping',
        correct: false,
      },
    ],
  },
  {
    question: 'Assinale a alternativa que contenha somente nomes válidos para variáveis:',
    answers: [
      {
        answer: 'índice, #pagina, contexto',
        correct: false,
      },
      {
        answer: 'nome1, sobrenome2, senha3',
        correct: true,
      },
      {
        answer: '2-nome, sobrenome, endereco',
        correct: false,
      },
      {
        answer: 'salário, preço, r$',
        correct: false,
      },
    ],
  },  
  {
    question: 'I. É correto afirmar que algoritmo é todo conjunto de regras e conceitos necessários para criar códigos que serão interpretados e executados por um computador; II. É correto afirmar que lógica de programação é uma sequência lógica de ações cujo objetivo é resolver um problema.',
    answers: [
      {
        answer: 'As duas afirmativas são falsas.',
        correct: false,
      },
      {
        answer: 'A afirmativa I é verdadeira, e a II é falsa. ',
        correct: false,
      },
      {
        answer: 'A afirmativa II é verdadeira, e a I é falsa. ',
        correct: false,
      },
      {
        answer: 'As duas afirmativas são verdadeiras.',
        correct: true,
      },
    ],
  }, 
  {
    question: 'Na lógica de programação, um tipo de dado __________ é caracterizado como um número que possui parte decimal, podendo ser positivo, negativo ou zero.',
    answers: [
      {
        answer: 'real',
        correct: true,
      },
      {
        answer: 'inteiro',
        correct: false,
      },
      {
        answer: 'boleano',
        correct: false,
      },
      {
        answer: 'cartesiano',
        correct: false,
      },
    ],
  }, 
  {
    question: 'O resultado da expressão lógica ! (6 ! = 18/3 | | true && 3 - 9 > 12 - 6 | | true) é: ',
    answers: [
      {
        answer: '6',
        correct: false,
      },
      {
        answer: '-6',
        correct: false,
      },
      {
        answer: 'false',
        correct: true,
      },
      {
        answer: '&&',
        correct: false,
      },
    ],
  },   
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();