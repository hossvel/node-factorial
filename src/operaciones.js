var factorialRecursivo = function(n) { 
    return (n != 1) ? n * factorialRecursivo(n - 1) : 1;
 };

 exports.factorialRecursivo = factorialRecursivo;


