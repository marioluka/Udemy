function saudacao(nome){
    return console.log(`Bom dia ${nome}`);
}

saudacao("Mario");

// Naturalmente funções não retornam nada (undefined).
// Para que possua um valor, você deve especificar com return no corpo da função.
// Porém, algo como (return console.log(`Bom dia ${nome}`);) não irá retornar nada, pois o retorno é apenas uma ação.
// Tudo após return não será executado


function soma (x,y){ 
    const resultado = x + y;
    return resultado;
}
// Declaração comum de uma função

const raiz = function (n){
    return n ** 0.5;
};
// Declaração de uma função anônima

const raiz2 = (n) => {
    return n ** 0.5;
};
// Arrow Function (Função Seta)

const raiz3 = n => n ** 0.5;
// Função Seta de única linha