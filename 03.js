// 3.- Crear una función que busque el número más grande en un arreglo.
// Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
// Salida -> 12

const findLargestNumber = (nums) =>
  nums.reduce((max, num) => {
    return num > max ? num : max;
  }, nums[0]);

console.log(findLargestNumber([1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12]));
