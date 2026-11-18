const add = (a) => (b) => (c) => a + b + c;
const result = add(2)(3)(4);

const multiply = (a) => (b) => (c) => a * b * c;
const result2 = multiply(2)(3)(4);

 const  subtract =  function(a){
    return function(b){
        return function(c){
            return a - b - c;
        }
    }
 }
 console.log(subtract(10)(3)(2));