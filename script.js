function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute(src = "./assets/logo-clara.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Logo-Uniasselvi-1.png")
  }
}