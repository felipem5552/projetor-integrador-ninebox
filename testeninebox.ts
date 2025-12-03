import * as readlineSync from 'readline-sync'

function obterResposta(pergunta: string): number {
  let resposta: number
  do {
    resposta = parseInt(readlineSync.question(pergunta))
  } while (resposta < 1 || resposta > 3) // Respostas entre 1 e 3, caso digite outra, a pergunta se repete
  return resposta
}

function avaliarFuncionario() {
  console.log("Bem-vindo à avaliação de desempenho do funcionário!")

  // Perguntas sobre Desempenho
  const desempenho1 = obterResposta("O funcionário cumpre suas metas e objetivos regularmente? (1 - Nunca, 2 - Às vezes, 3 - Sempre): ")
  const desempenho2 = obterResposta("O funcionário entrega trabalho de boa qualidade? (1 - Nunca, 2 - Às vezes, 3 - Sempre): ")
  const desempenho3 = obterResposta("O funcionário é proativo na solução de problemas? (1 - Nunca, 2 - Às vezes, 3 - Sempre): ")
  const desempenho4 = obterResposta("O funcionário consegue cumprir prazos de forma consistente? (1 - Nunca, 2 - Às vezes, 3 - Sempre): ")

  // Perguntas sobre Potencial
  const potencial1 = obterResposta("O funcionário busca aprender novas habilidades? (1 - Nunca, 2 - Às vezes, 3 - Sempre): ")
  const potencial2 = obterResposta("O funcionário demonstra iniciativa em busca de novas responsabilidades? (1 - Nunca, 2 - Às vezes, 3 - Sempre): ")
  const potencial3 = obterResposta("O funcionário se adapta bem a mudanças e novos desafios? (1 - Nunca, 2 - Às vezes, 3 - Sempre): ")
  const potencial4 = obterResposta("O funcionário tem visão estratégica para o futuro da empresa? (1 - Nunca, 2 - Às vezes, 3 - Sempre): ")

  // Cálculo da média 
  const mediaDesempenho = (desempenho1 + desempenho2 + desempenho3 + desempenho4) / 4
  const mediaPotencial = (potencial1 + potencial2 + potencial3 + potencial4) / 4

  // Classificação de desempenho e potencial
  let desempenhoTotal: number
  if (mediaDesempenho <= 1.5) {
    desempenhoTotal = 1 // Desempenho baixo
  } else if (mediaDesempenho <= 2.5) {
    desempenhoTotal = 2 // Desempenho médio
  } else {
    desempenhoTotal = 3 // Desempenho alto
  }

  let potencialTotal: number
  if (mediaPotencial <= 1.5) {
    potencialTotal = 1 // Potencial baixo
  } else if (mediaPotencial <= 2.5) {
    potencialTotal = 2 // Potencial médio
  } else {
    potencialTotal = 3 // Potencial alto
  }

  // Classificação do quadrante
  let quadrante = ""

  if (desempenhoTotal === 1 && potencialTotal === 1) {
    quadrante = "Quadrante 1: Desempenho baixo e Potencial baixo"
  } else if (desempenhoTotal === 1 && potencialTotal === 2) {
    quadrante = "Quadrante 2: Desempenho baixo e Potencial médio"
  } else if (desempenhoTotal === 1 && potencialTotal === 3) {
    quadrante = "Quadrante 3: Desempenho baixo e Potencial alto"
  } else if (desempenhoTotal === 2 && potencialTotal === 1) {
    quadrante = "Quadrante 4: Desempenho médio e Potencial baixo"
  } else if (desempenhoTotal === 2 && potencialTotal === 2) {
    quadrante = "Quadrante 5: Desempenho médio e Potencial médio"
  } else if (desempenhoTotal === 2 && potencialTotal === 3) {
    quadrante = "Quadrante 6: Desempenho médio e Potencial alto"
  } else if (desempenhoTotal === 3 && potencialTotal === 1) {
    quadrante = "Quadrante 7: Desempenho alto e Potencial baixo"
  } else if (desempenhoTotal === 3 && potencialTotal === 2) {
    quadrante = "Quadrante 8: Desempenho alto e Potencial médio"
  } else if (desempenhoTotal === 3 && potencialTotal === 3) {
    quadrante = "Quadrante 9: Desempenho alto e Potencial alto"
  }

  
  console.log(`O funcionário se encontra no: ${quadrante}`)
}

// Teste
avaliarFuncionario()
