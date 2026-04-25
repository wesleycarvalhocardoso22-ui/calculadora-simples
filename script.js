function pegarValores() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  return { num1, num2 };
}

function mostrarResultado(valor) {
  document.getElementById("resultado").innerText = "Resultado: " + valor;
}

function somar() {
  const { num1, num2 } = pegarValores();
  mostrarResultado(num1 + num2);
}

function subtrair() {
  const { num1, num2 } = pegarValores();
  mostrarResultado(num1 - num2);
}

function multiplicar() {
  const { num1, num2 } = pegarValores();
  mostrarResultado(num1 * num2);
}

function dividir() {
  const { num1, num2 } = pegarValores();
  if (num2 === 0) {
    mostrarResultado("não é possível dividir por zero");
  } else {
    mostrarResultado(num1 / num2);
  }
}