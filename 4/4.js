const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6];
let count = 0;

function lalal(array) {
  var end = array.length;
  while (end !== 1) {
    for (var i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        var k = array[i];
        array[i] = array[i + 1];
        array[i + 1] = k;
      }
    }
    end -= 1;
  }
  console.log(array);
}

lalal(arr);
