let pantalla = document.querySelector("#pantalla");
let operandos = [];
let operador = null;

function agregarDigito(digito) {
  if (pantalla.textContent === "0" && digito !== ".") {
    pantalla.textContent = digito;
  } else if (digito === "." && pantalla.textContent.includes(".")) {
    return;
  } else {
    pantalla.textContent += digito;
  }
}

function seleccionarOperando() {
  operandos.push(parseFloat(pantalla.textContent));
  pantalla.textContent = "0";
}

function sumar() {
  seleccionarOperando();
  operador = "+";
}

function restar() {
  seleccionarOperando();
  operador = "-";
}

function multiplicar() {
  seleccionarOperando();
  operador = "*";
}

function dividir() {
  seleccionarOperando();
  operador = "/";
}

function calcular() {
  if (operador == "+") {
    operandos.push(parseFloat(pantalla.textContent));
    pantalla.textContent = operandos.reduce((a, b) => a + b);
  } else if (operador == "-") {
    operandos.push(parseFloat(pantalla.textContent));
    pantalla.textContent = operandos.reduce((a, b) => a - b);
  } else if (operador == "*") {
    operandos.push(parseFloat(pantalla.textContent));
    pantalla.textContent = operandos.reduce((a, b) => a * b);
  } else if (operador == "/") {
    operandos.push(parseFloat(pantalla.textContent));
    pantalla.textContent = operandos.reduce((a, b) => a / b);
  }
  operandos = [];
  operador = null;
}

function limpiar() {
  pantalla.textContent = "0";
  operandos = [];
  operador = null;
}

function borrar(){
    val = pantalla.textContent;
    val = val.substring(0, val.length - 1);
    pantalla.textContent = val;
}

document.querySelectorAll(".numero").forEach((boton) => {
  boton.addEventListener("click", () => agregarDigito(boton.textContent));
});

