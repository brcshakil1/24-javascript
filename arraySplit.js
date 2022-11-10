const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums, '= numbers');

const part = nums.slice(3, 6);
console.log(part, '= part of numbers')

const remove = nums.splice(2, 4);
console.log(remove, '= remove number');

const together = nums.join(' ');
console.log(together, '= together numbers')