const assert = require('assert');
const operaciones = require('../src/operaciones');

    describe('Factorial', () => {
        it('factorial correcto 5 :', () => {
        var rpta = operaciones.factorialRecursivo(5);  
         assert.equal(rpta,120);
        console.log(rpta);
    });

    it('factorial incorrecto de 4:', () => {
        var rpta = operaciones.factorialRecursivo(3);   
        assert.notEqual(rpta,3);
        console.log(rpta);  
    
    });

      it('factorial 1', () => {
        var rpta = operaciones.factorialRecursivo(1);
        assert.equal(rpta,1);
        console.log(rpta);  
    
    });

    it('factorial 0', () => {
        var rpta = operaciones.factorialRecursivo(1);
        console.log(rpta);
        assert.equal(rpta,1);
      });

      it('factorial -1', () => {
        var rpta = operaciones.factorialRecursivo(-1);
        console.log(rpta);
        assert.notEqual(rpta,1);
      });


});
