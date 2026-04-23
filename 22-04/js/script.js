let pontos = 0

function responder(opcao, pergunta) {

    const corretas = {
        1: "C",
        2: "B",
        3: "B",
        4: "C",
        5: "C"
    };

    const resultado = document.getElementById("resultado" + pergunta)
    const gif = document.getElementById("gif" + pergunta)
    const msg = document.getElementById("msg" + pergunta)

    resultado.style.display = "flex"

    if (opcao === corretas[pergunta]) {
        pontos++

        
        document.getElementById("pontos").textContent = pontos

        gif.src = "../22-04/assets/images/acerto.gif"
        msg.textContent = "Acertou! Muito bem boxeador"

        setTimeout(() => {
            document.getElementById("q" + pergunta).style.display = "none"

            const proxima = document.getElementById("q" + (pergunta + 1))

            if (proxima) {
                proxima.style.display = "block"
            } else {
                document.getElementById("fim").style.display = "flex"

                document.getElementById("pontuacaoFinal").textContent =
                    `Você fez ${pontos} de 5 pontos!`
            }

        }, 1500);

    } else {
        gif.src = "../22-04/assets/images/erro.gif"
        msg.textContent = "Errou otário! toma um socão"

        
        setTimeout(() => {
            resetarQuiz()
        }, 1500)
    }
}

function resetarQuiz() {
    pontos = 0

    
    document.getElementById("pontos").textContent = 0

    
    for (let i = 1; i <= 5; i++) {
        const pergunta = document.getElementById("q" + i)
        const resultado = document.getElementById("resultado" + i)

        if (pergunta) pergunta.style.display = "none"
        if (resultado) resultado.style.display = "none"
    }

   
    document.getElementById("fim").style.display = "none"

    
    document.getElementById("q1").style.display = "block"
}