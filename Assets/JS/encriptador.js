function prepareSpace(frase) {
    document.getElementById("view_section").innerHTML = `
    <textarea id="output" class="output" rows="8" readonly></textarea>
    <button class="boton1" onclick="copiar()">Copiar</button>`;
}

function validacion(frase) {
    let regex = /[A-ZÀ-ú]/;
    return (!regex.test(frase) && frase != '');
}

function encriptar(frase) {
    let newFrase = frase.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return newFrase;
}

function desencriptar(frase) {
    let newFrase = frase.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return newFrase;
}

function mostrarEncriptado() {
    let frase = document.getElementById("input").value;
    if(validacion(frase)) {
        prepareSpace(frase);
        document.getElementById("output").value = encriptar(frase);
    } else {
        customAlert('Entrada incorrecta', 'Parece que su mensaje esté vacío o tal vez contiene mayúsculas y/o acentos, evítelos por favor.', true);
    }
}

function mostrarDesencriptado() {
    let frase = document.getElementById("input").value;
    if(validacion(frase)) {
        prepareSpace(frase);
        document.getElementById("output").value = desencriptar(frase);
    } else {
    }
}



function copiar() {
    let copiedText = document.getElementById("output").value;
    navigator.clipboard.writeText(copiedText);
}