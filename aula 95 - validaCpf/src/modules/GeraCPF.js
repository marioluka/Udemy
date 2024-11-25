import ValidaCPF from "./validaCpf";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max -min) + min ));
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCpf = cpfSemDigitos + digito1 + digito2;

        return (
            novoCpf.slice(0, 3) + '.' + 
            novoCpf.slice(3, 6) + '.' + 
            novoCpf.slice(6, 9) + '-' + 
            novoCpf.slice(9, 11)
        );
    }
}