const numbers = [1, 2, 3, 4, 6, 7, 8, 9];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     console.log(result);
// }
const square = numbers.map(num => num * num);
console.log(square);

const filter = numbers.filter(num => num > 5);
console.log(filter)

const find = numbers.find( num => num > 7 );
console.log(find)

