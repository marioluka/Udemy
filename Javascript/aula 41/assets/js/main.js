// escreva uma função que recebe dois números e retorne o maior deles.

const maior = (a,b) => a > b ? a : b;

// escreva uma função chamada ehPaisagem que receba dois valores correspondentes
// ao tamanho da imagem e retorne True se estiver no modo paisagem.

function ehPaisagem (largura, altura) {
    return largura > altura;
}

// numero divisivel por 3 = fizz
// numero divisivel por 5 = buzz
// numero divisivel por 3 e 5 = fizzbuzz
// numero não divisivel por 3 e 5 = retorna o valor
// testar entre 0 e 100

function fizzbuzz () {
    for (let i=0; i<=100; i++){
        if (i % 3 === 0) console.log('Fizz');
        if (i % 5 === 0) console.log('Buzz');
        if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
        if (i % 3 !== 0 && i % 5 !== 0) console.log(i);
    }
}

fizzbuzz();