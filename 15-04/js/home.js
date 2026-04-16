const titulo = document.getElementById("titulo")
const botao = document.getElementById("btn")

let original = titulo.textContent
let alterado = "Texto novo aqui"

let mudou = false

function trocarTexto() {
  if (mudou) {
    titulo.textContent = original
  } else {
    titulo.textContent = alterado
  }

  mudou = !mudou
}

botao.addEventListener('click', trocarTexto)