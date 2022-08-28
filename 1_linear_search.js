const array = [1, 4, 5, 6, 8, 9, 6, 3];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
}

console.log(linearSearch(array, 8));
console.log("count:", count);
