// VARIABLES

const textinput = document.querySelector('.input1')
const parrafo = document.querySelector('.parrafo')
const textarea = document.querySelector('.textarea')
document.querySelector('.encript').addEventListener('click', encoder)
document.querySelector('.desencript').addEventListener('click', encoderR)
document.querySelector('.copy').addEventListener('click', copy)

function verificar(){
    var lupa = document.querySelector(".lupa")
    var h2 = document.querySelector("h2")
    if (!textinput.value) {
        lupa.style.display = "flex"
        h2.style.display = "flex"
    }

}
// Encoder
function encoder(){
    verificar()
    let text = textinput.value
    let output = ""
    console.log(text)
    for (letter of text) {
        if (letter == "e") {
            letter = "enter"
        }
        else if (letter == "i"){
            letter = "imes"
        }
        else if (letter == "a"){
            letter = "ai"
        }
        else if (letter == "o"){
            letter = "ober"
        }
        else if (letter == "u"){
            letter = "ufat"
        }
        output += letter
    }
    ocultar()
    parrafo.textContent = output
    textarea.textContent = ""
}

// Encoder reverse
function encoderR(){
    verificar()
    let text = textinput.value.toString()
        while (text.includes("enter")){
            text = text.replace("enter", "e")
        }
        while(text.includes("imes")){
            text = text.replace("imes", "i")
        }
        while(text.includes("ai")){
            text = text.replace("ai", "a")
        }
        while(text.includes("ober")){
            text = text.replace("ober", "o")
        }
        while(text.includes("ufat")){
            text = text.replace("ufat", "u")
        }
        ocultar()
    return parrafo.textContent = text
}

function copy(){
    navigator.clipboard.writeText(parrafo.textContent)
    if (textarea.textContent) {
        
    }
    verificar()
}

function ocultar(){
    var lupa = document.querySelector(".lupa")
    var h2 = document.querySelector("h2")
    let text = textinput.value.toString()
        if (!text) return
    lupa.style.display = "none"
    h2.style.display = "none"

}
