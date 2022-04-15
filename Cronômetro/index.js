window.onload = function() {

    var segundos = 00;
    var dec = 00;
    var addDec = document.getElementById('dec')
    var addSegundos = document.getElementById('segundos')
    var botaoIniciar = document.getElementById('botao-iniciar')
    var botaoParar = document.getElementById('botao-parar')
    var botaoResetar = document.getElementById('botao-resetar')
    var Intervalo ;

    botaoIniciar.onclick = function() {
        clearInterval(Intervalo);
        Intervalo = setInterval(startTimer, 10);
    }

    botaoParar.onclick = function() {
        clearInterval(Intervalo);
    }

    botaoResetar.onclick = function() {
        clearInterval(Intervalo);
        dec = '00'
        segundos = '00'
        addDec.innerHTML = dec;
        addSegundos.innerHTML = segundos;
    }

    function startTimer () {
        dec++;

        if(dec <= 9){
            addDec.innerHTML = '0' + dec;

        } if (dec > 9){
            addDec.innerHTML = dec;

        } if (dec > 99) {
            console.log("segundos");
            segundos++;
            addSegundos.innerHTML = '0' + segundos;
            dec = 0;
            addDec.innerHTML = '0' + 0;

        }if (segundos > 9){
            addSegundos.innerHTML= segundos;
        }

    }
}