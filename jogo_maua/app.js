//pontuacao inicial dos jogadores
var pontuacao = [0, 0];

//pontuacao da rodada atual
var pontosRodada = 0;

//jogador da vez
var jogadorAtual = 0;
var dado = Math.floor(Math.random() * 6) + 1;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var pontosRodada0 = document.querySelector("#pontos-rodada-0");
var pontosRodada1 = document.querySelector("#pontos-rodada-1");

var pontosGlobal0 = document.querySelector("#pontos-global-0");
var pontosGlobal1 = document.querySelector("#pontos-global-1");
var pontosGlobais = [pontosGlobal0, pontosGlobal1];

var botaoPassarVez = document.querySelector("#botao-passar-vez");

var botaoNovoJogo = document.querySelector("#botao-novo-jogo");

var pontosRodadas = [pontosRodada0, pontosRodada1];

botaoLancarDado.addEventListener("click", function () {
  var dado = Math.floor(Math.random() * 6) + 1;
  if (dado == 9) {
    pontuacao[jogadorAtual] = 0;
    pontosRodadas[jogadorAtual].textContent = 1;
    pontosGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    jogadorAtual = 1 - jogadorAtual;
  } else {
    pontuacao[jogadorAtual] += dado;
    pontosGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontosRodadas[jogadorAtual].textContent = dado;
    terminar();
  }
});

botaoPassarVez.addEventListener("click", function () {
  pontosGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
  pontosRodadas[jogadorAtual].textContent = null;
  jogadorAtual = 1 - jogadorAtual;
});

botaoNovoJogo.addEventListener("click", function () {
  restart();
});

function terminar() {
  if (pontuacao[jogadorAtual] >= 100) {
    $("#Modal").modal("show");
    restart();
  }
}
function restart() {
  pontuacao[jogadorAtual] = 0;
  pontosRodadas[jogadorAtual].textContent = null;
  pontosGlobais[jogadorAtual].textContent = 0;
  jogadorAtual = 1 - jogadorAtual;
  pontuacao[jogadorAtual] = 0;
  pontosRodadas[jogadorAtual].textContent = null;
  pontosGlobais[jogadorAtual].textContent = 0;
  if (jogadorAtual == 1) {
    jogadorAtual = 1 - jogadorAtual;
  }
}
