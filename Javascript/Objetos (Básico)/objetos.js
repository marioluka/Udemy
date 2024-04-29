// const pessoa = {
//    nome: "Mario",
//    sobrenome: 'Braga',
//    idade: 21
//};

//function criaPessoa (nome, sobrenome, idade){
//    return {
//        nome: nome,
//        sobrenome: sobrenome,
//        idade: idade
//    };
//}

// const pessoax = criaPessoa('Mario Luka', 'Braga', 21)
//console.log(pessoax.nome, pessoax.sobrenome, `tem ${pessoax.idade} anos`);

const pessoa1 = {
    nome: 'mario',
    sobrenome: 'braga',
    idade: 21,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();