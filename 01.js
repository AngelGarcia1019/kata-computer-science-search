// 1.- Crear una función que encuentre el número más repetido en un array.
// Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
// Salida -> 6

const moreRepeated = (nums = []) => {
  let data = nums.reduce((counts, num) => {
    counts[num] = num in counts ? counts[num] + 1 : 1;
    return counts;
  }, {});

  const numsOrderCounts = Object.keys(data).sort((a, b) => b - a);

  const mostRepeatedNumber = numsOrderCounts.reduce(
    (mostRepeated, num) =>
      data[num] > data[mostRepeated] ? num : mostRepeated,
    numsOrderCounts[0]
  );

  return mostRepeatedNumber;
};

console.log(moreRepeated([3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6]));
