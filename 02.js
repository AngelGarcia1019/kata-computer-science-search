// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
// Ejemplo input -> [8,'e',7,2,'a','d','f',2,3,1,4,3]
// Salida → ['e','a','d','f']

const searchLettersInNums = (nums) =>
  nums.filter((num) => typeof num === "string");

console.log(searchLettersInNums([8, "e", 7, 2, "a", "d", "f", 2, 3, 1, 4, 3]));
