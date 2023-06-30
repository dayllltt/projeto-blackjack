/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de BlackJack!");

while (true) {
  let cartaUsuario1 = comprarCarta();
  let cartaUsuario2 = comprarCarta();
  let cartaComputador1 = comprarCarta();
  let cartaComputador2 = comprarCarta();

  let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
  let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor;

  console.log(
    `Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`
  );
  console.log(
    `Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`
  );

  if (pontuacaoUsuario === 21 && pontuacaoComputador === 21) {
    console.log("Empate!");
  } else if (pontuacaoUsuario === 21) {
    console.log("O usuário ganhou!");
  } else if (pontuacaoComputador === 21) {
    console.log("O computador ganhou!");
  } else {
    if (pontuacaoUsuario > 21) {
      console.log("O usuário estourou! O computador ganhou!");
    } else {
      if (pontuacaoComputador > 21) {
        console.log("O computador estourou! O usuário ganhou!");
      } else if (pontuacaoUsuario > pontuacaoComputador) {
        console.log("O usuário ganhou!");
      } else if (pontuacaoComputador > pontuacaoUsuario) {
        console.log("O computador ganhou!");
      } else {
        console.log("Empate!");
      }
    }
  }

  if (!confirm("Deseja iniciar uma nova rodada?")) {
    console.log("O jogo acabou.");
    break;
  }
}
