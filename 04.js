// 3.- Crear una función que busque el número más grande en un arreglo.
// Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
// Salida -> 12

const findSmallestNumber = (nums) =>
  nums.reduce((min, num) => {
    return num < min ? num : min;
  }, nums[0]);

console.log(findSmallestNumber([1, 4, 5, -1, -7, 2, 3, 9]));
