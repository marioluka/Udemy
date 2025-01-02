exports.paginaInicial = (req, res) => {
    res.render('index', {
        tituto: 'esse é o título da pagina',
        numeros: [1,2,3,4,5,6,7,8,9]
    });
};