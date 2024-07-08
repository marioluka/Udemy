function relogio () {

    function mostrarhora (segundos) {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio () {
        timer = setInterval( function() {
            segundos++;
            relogio.innerHTML = mostrarhora(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const elemento = e.target;
        
        if (elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')){
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if (elemento.classList.contains('reiniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos = 0;
        }
    });
}

relogio();