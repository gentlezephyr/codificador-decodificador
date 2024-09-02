function encriptarTexto() {
    let palavraRecebida = document.querySelector('#campoTexto');
    let saidaTexto = document.querySelector('.saidaTexto');
    let novaPalavra = palavraRecebida.value;
    let overlaydeteste = document.querySelector('.overlay-test');

    if (palavraRecebida.value != "") {
        novaPalavra = novaPalavra
            .replace(/[^a-zA-Z\s]/g, "")
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        saidaTexto.innerHTML = novaPalavra;
    } else {
        const timeout = 3000;
        overlaydeteste.innerHTML = '<p>Acho que deveria escrever algo antes...</p>';
        overlaydeteste.style.display = "block";
        setTimeout(() => {
            overlaydeteste.style.display = "none";
        }, timeout)
    }

};

function desencriptarTexto() {
    let palavraRecebida = document.querySelector('#campoTexto');
    let saidaTexto = document.querySelector('.saidaTexto');
    let novaPalavra = palavraRecebida.value;
    let overlaydeteste = document.querySelector('.overlay-test');


    if (palavraRecebida.value != "") {
        novaPalavra = novaPalavra
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        saidaTexto.innerHTML = novaPalavra;

    } else {
        const timeout = 3000;
        overlaydeteste.innerHTML = '<p>Acho que deveria escrever algo antes...</p>';
        overlaydeteste.style.display = "block";
        setTimeout(() => {
            overlaydeteste.style.display = "none";
        }, timeout)
    }
};

function copiarTexto() {
    let saidaTexto = document.querySelector('.saidaTexto');
    let overlaydeteste = document.querySelector('.overlay-test');

    if (saidaTexto.innerHTML != "") {
        let range = document.createRange();
        range.selectNode(saidaTexto);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        window.getSelection().removeAllRanges();

        const timeout = 1000;
        overlaydeteste.innerHTML = '<p>Copiado!</p>';
        overlaydeteste.style.display = "block";
        setTimeout(() => {
            overlaydeteste.style.display = "none";
        }, timeout)
        
    }
};

function limpar() {
    let saidaTexto = document.querySelector('.saidaTexto');
    let palavraRecebida = document.querySelector('#campoTexto');

    saidaTexto.innerHTML = '';
    palavraRecebida.value = '';
}