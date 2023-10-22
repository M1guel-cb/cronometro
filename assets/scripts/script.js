const iniciar = document.querySelector('button#iniciar');
const resetar = document.querySelector('button#resetar');
const continuar = document.querySelector('button#continuar');
const pausar = document.querySelector('button#pausar');
const minutosHTML = document.querySelector('div#minutos');
const segundosHTML = document.querySelector('div#segundos');
const milisegundosHTML = document.querySelector('div#milisegundos');

var interval;
var milisegundos = 0;
var segundos = 0;
var minutos = 0;
var isPause = false;

iniciar.addEventListener('click', start)
pausar.addEventListener('click', pause)
continuar.addEventListener('click', continuarTempo)
resetar.addEventListener('click', resetarTempo)

function start() {
    isPause = false;
    interval = setInterval(() => {
        if (!isPause) {
            milisegundos += 10

            if (milisegundos === 1000) {
                milisegundos = 0
                segundos++
            }

            if (segundos === 60) {
                segundos = 0
                minutos++
            }
        milisegundosHTML.textContent = formatMilisegundos(milisegundos)
        segundosHTML.textContent = formatTime(segundos)
        minutosHTML.textContent = formatTime(minutos)
        }
    }, 10)
    iniciar.style.display = 'none'
    pausar.style.display = 'block'

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMilisegundos(mili) {
    return mili < 100 ? `0${mili}` : mili
}

function pause() {
    isPause = true
    pausar.style.display = 'none'
    continuar.style.display = 'block'
}

function continuarTempo() {
    isPause = false
    continuar.style.display = 'none'
    pausar.style.display = 'block'
}

function resetarTempo() {
    clearInterval(interval)

    minutos = 0
    segundos = 0
    milisegundos = 0

    milisegundosHTML.textContent = '000'
    segundosHTML.textContent = '00'
    minutosHTML.textContent = '00'

    pausar.style.display = 'none'
    iniciar.style.display = 'block'
    continuar.style.display = 'none'
}