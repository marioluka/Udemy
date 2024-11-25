import GeraCPF from './modules/GeraCPF.js';
import './assets/css/style.css';


(function() {
    const gerador = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gerador.geraNovoCpf();
})();