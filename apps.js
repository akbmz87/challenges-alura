document.querySelector('.boton__encriptado').addEventListener('click', () => {
    const ingresarTexto = document.querySelector('.ingresar__texto').value;
    const encriptarTexto = encrypt(ingresarTexto);
    document.querySelector('.salida__texto').value = encriptarTexto;
});

document.querySelector('.boton__desencriptado').addEventListener('click', () => {
    const ingresarTexto = document.querySelector('.ingresar__texto').value;
    const desencriptarTexto = decrypt(ingresarTexto);
    document.querySelector('.salida__texto').value = desencriptarTexto;
});

document.querySelector('.boton__copiar').addEventListener('click', async () => {
    const outputText = document.querySelector('.salida__texto').value;
    try {
        await navigator.clipboard.writeText(outputText);
        alert("Texto copiado al portapapeles");
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
});

function encrypt(text) {
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.replace(/[eioua]/g, match => rules[match]);
}

function decrypt(text) {
    const rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return text.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
}
