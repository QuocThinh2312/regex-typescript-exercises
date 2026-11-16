const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers(arr));
