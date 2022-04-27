const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(sum([3, 2, 1]));
// running time complexity = O(n);
// space complexity = O(1)!

const doubleArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};
// space complexity = O(n)!
