var factorialRecursivo = function(n) {
 if(n<0) return "no existe factorial";    
 if(n == 1 || n == 0) return 1;

 return n * factorialRecursivo(n - 1);
 };

 exports.factorialRecursivo = factorialRecursivo;


