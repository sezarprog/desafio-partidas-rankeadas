// 02-04-2024
// # Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**
//
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
//
// ## Objetivo:
//
// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
//
// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal
//
// ## Saída
//
// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
//
// Iniciando uma matriz - arrays que representa uma tabela de vitórias 'coluna 0' e
// derrotas coluna 1'
//
let jogadas = [
  [10, 20],
  [40, 50],
  [70, 80]
];
// Função para somar os valores de uma coluna específica da matriz
//
function somarColuna(jogadas, coluna) {
  let soma = 0;
    for (let i = 0; i < jogadas.length; i++) {
      soma += jogadas[i][coluna];
  }
//
  return soma; //retorna o valor da soma dos valores das colunas
}
// Iniciando as constantes - Índice da coluna que deseja somar (começando do zero)
const colunaASomarA = 0;
const colunaASomarB = 1;
const vitorias = somarColuna(jogadas,0)
const derrotas = somarColuna(jogadas,1)
// Iniciando um cabeçalho de texto, mostrando na tela os valores
console.log("*** RELATÓRIO GERAL DETALHADO - RANKEAMENTO ***\n")
console.log("Nossa *Matriz - Tabela* de resultados\n")
console.log("A soma dos elementos da coluna", colunaASomarA, " vitórias é:", somarColuna(jogadas, colunaASomarA));
console.log("A soma dos elementos da coluna", colunaASomarB, " derrotas é:", somarColuna(jogadas, colunaASomarB),"\n");
//
function rankeadas(vitorias,derrotas) {
	saldoRankeadas = vitorias - derrotas
  //return saldoRankeadas *** este retorno foi comentado, não permitiu o funcionamento
  // do 'switch case'
let classificacao
//
switch (true) {
  case (saldoRankeadas >= 0 && saldoRankeadas <= 10):
    classificacao = "Ferro";
    break;
  case (saldoRankeadas >= 11 && saldoRankeadas <= 20):
    classificacao = "Bronze";
    break;
  case (saldoRankeadas >= 21 && saldoRankeadas <= 50):
    classificacao = "Prata";
    break;
  case (saldoRankeadas >= 51 && saldoRankeadas <= 80):
    classificacao = "Ouro";
    break;
  case (saldoRankeadas >= 81 && saldoRankeadas<= 90):
    classificacao = "Diamante";
    break;
  case (saldoRankeadas >= 91 && saldoRankeadas<= 100):
    classificacao = "Lendário";
    break;
    case (saldoRankeadas >= 101):
    classificacao = "Imortal";
    break;
  default:
    classificacao = "Sem classificação";
}
console.log("O Herói tem saldo de ** ", saldoRankeadas, " **\n")
console.log("Esta no nível de ** ", classificacao, " **\n");
}
//
let test = rankeadas(vitorias,derrotas)
console.log("O número de vitórias foram: "+ vitorias)
console.log("O número de derrotas foram: "+ derrotas)
