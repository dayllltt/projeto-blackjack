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
  let cartasUsuario = [];
  let cartasComputador = [];
  let pontuacaoUsuario = 0;
  let pontuacaoComputador = 0;

  while (true) {
    let cartaUsuario = comprarCarta();
    let cartaComputador = comprarCarta();

    if (
      (cartaUsuario.valor === 11 && pontuacaoUsuario + cartaUsuario.valor > 21) ||
      (cartaComputador.valor === 11 && pontuacaoComputador + cartaComputador.valor > 21)
    ) {
      continue; // Sorteia novamente caso as duas cartas iniciais sejam A (Ás)
    }

    cartasUsuario.push(cartaUsuario);
    cartasComputador.push(cartaComputador);
    pontuacaoUsuario += cartaUsuario.valor;
    pontuacaoComputador += cartaComputador.valor;

    if (
      pontuacaoUsuario === 21 ||
      pontuacaoComputador === 21 ||
      !confirm(
        `Suas cartas são ${montarTextoCartas(cartasUsuario)}. A carta revelada do computador é ${cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`
      )
    ) {
      break;
    }
  }

  while (pontuacaoComputador < pontuacaoUsuario && pontuacaoUsuario <= 21 && pontuacaoComputador <= 21) {
    let cartaComputador = comprarCarta();
    cartasComputador.push(cartaComputador);
    pontuacaoComputador += cartaComputador.valor;
  }

  console.log(
    `Suas cartas são ${montarTextoCartas(cartasUsuario)}. Sua pontuação é ${pontuacaoUsuario}.`
  );
  console.log(
    `As cartas do computador são ${montarTextoCartas(cartasComputador)}. A pontuação do computador é ${pontuacaoComputador}.`
  );

  if (pontuacaoUsuario > 21) {
    console.log("O usuário estourou! O computador ganhou!");
  } else if (pontuacaoComputador > 21) {
    console.log("O computador estourou! O usuário ganhou!");
  } else if (pontuacaoUsuario > pontuacaoComputador) {
    console.log("O usuário ganhou!");
  } else if (pontuacaoComputador > pontuacaoUsuario) {
    console.log("O computador ganhou!");
  } else {
    console.log("Empate!");
  }

  if (!confirm("Quer iniciar uma nova rodada?")) {
    console.log("O jogo acabou.");
    break;
  }
}

function montarTextoCartas(cartas) {
  return cartas.map((carta) => carta.texto).join(" ");
}

