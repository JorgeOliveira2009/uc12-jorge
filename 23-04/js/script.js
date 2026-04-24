const img = document.getElementById('imagem')
const btn = document.getElementById('btn')
const input = document.getElementById("nome")
const nomeTexto = document.getElementById("nomeTexto")
const trollface_url = 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/73/Trollface.png/250px-Trollface.png'
const trikitracatelas = 'https://preview.redd.it/fotos-aleat%C3%B3rias-da-minha-galeria-v0-hxe5w0656nv91.jpg?width=640&crop=smart&auto=webp&s=f592f6e10bf0b8b1d15a1ff1736f8960c741e93c'

input.addEventListener("input", (event) => {
    const valor = event.target.value

    nomeTexto.textContent = valor === "" 
        ? "" 
        : valor
})

btn.addEventListener('click', () => {
    img.setAttribute(
        'src', 
        img.getAttribute('src') === trollface_url ? trikitracatelas : trollface_url
    )

    img.setAttribute(
        'alt', 
        img.getAttribute('src') === trollface_url ? 'trollface' : 'imagem'
    )
})