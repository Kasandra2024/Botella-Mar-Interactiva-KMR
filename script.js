const audio = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');
const contenedorBotella = document.getElementById('contenedorBotella');
const mar = document.getElementById('mar');
const pantallaPergamino = document.getElementById('pantallaPergamino');
const textoEscribiendo = document.getElementById('textoEscribiendo');

let typewriterTimeout;

const poema = "Te envié este poema al mar de la eternidad... \n\nQue cruzó corrientes y tormentas solo para recordarte que, incluso en la noche más oscura del océano, tu recuerdo sigue siendo el único faro que guía mis olas hacia la paz.\n\nGracias por existir. ❤️";

function abrirMensaje(e) {
    e.stopPropagation();
    
    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    if (audio.paused) {
        audio.play().catch(() => {});
        btnMusica.innerHTML = "🎵 APAGAR MÚSICA";
    }

    contenedorBotella.classList.add('abierta');
    mar.classList.add('calma');

    setTimeout(() => {
        pantallaPergamino.classList.add('mostrar');
        textoEscribiendo.innerHTML = "";
        startTypewriter(poema, 0);
    }, 1500);
}

function startTypewriter(text, i) {
    if (i < text.length) {
        let letra = text.charAt(i);
        textoEscribiendo.innerHTML += (letra === "\n") ? "<br>" : letra;
        i++;
        typewriterTimeout = setTimeout(() => {
            startTypewriter(text, i);
        }, 70);
    }
}

function cerrarPergamino() {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    pantallaPergamino.classList.remove('mostrar');
    mar.classList.remove('calma');
    contenedorBotella.classList.remove('abierta');
}

function toggleMusica(event) {
    event.stopPropagation();
    if (audio.paused) {
        audio.play().catch(() => {});
        btnMusica.innerHTML = "🎵 APAGAR MÚSICA";
    } else {
        audio.pause();
        btnMusica.innerHTML = "✨ ACTIVAR MÚSICA";
    }
}

// Generador de Estrellas de fondo
for (let i = 0; i < 85; i++) {
    let estrella = document.createElement('div');
    estrella.className = 'estrella';
    let tam = Math.random() * 2 + 1;
    estrella.style.width = tam + 'px';
    estrella.style.height = tam + 'px';
    estrella.style.top = Math.random() * 62 + 'vh';
    estrella.style.left = Math.random() * 100 + 'vw';
    estrella.style.animationDuration = (Math.random() * 4 + 3) + 's';
    estrella.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(estrella);
}