exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'esse é o valor de uma variável local';
    next();
};