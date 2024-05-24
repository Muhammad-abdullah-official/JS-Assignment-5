//No 01
// for (let i = 0; i < 5; i++) {
//   document.write('Hello World' + '<br>');
// }

// //No 02
// for (let i = 1; i <= 10; i++) {
//   document.write(i + '<br>');
// }

// //No 03
// var num = +prompt('Enter number to Multiply');
// var leng = +prompt('Enter length');
// document.write('Multiplication table of ', num + '<br>');
// document.write('Length is ', leng, '<br>');

// for (let i = 1; i <= leng; i++) {
//   document.write(`${num} x ${i} = ${num * i} <br>`);
// }

// //No 04
// var A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
// for (let i = 0; i < A.length; i++) {
//   document.write(A[i], '<br>');
// }

// //No 05
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i], '<br>');
// }
// for (let i = 0; i < fruits.length; i++) {
//   document.write(`Element at index ${i} is ${fruits[i]} <br>`);
// }

// //No 06
// var item = +prompt('Enter number of items');
// var itemarr = [];
// for (let i = 0; i < item; i++) {
//   var itname = prompt(`Enter Item for index ${i}`);
//   itemarr[i] = itname;
// }
// document.write(`Number of items : ${item} <br>`);
// document.write(`Items : <br>`);
// for (let i = 0; i < item; i++) {
//   document.write(`${itemarr[i]} <br>`);
// }

// //NO 07
// document.write('Counting:');
// for (let i = 0; i <= 15; i++) {
//   document.write(` ${i}`);
// }
// document.write(`<br>`);
// document.write(`Reverse Counting: `);
// for (let i = 10; i >= 1; i--) {
//   document.write(` ${i}`);
// }
// document.write(`<br>`);
// document.write('Even:');

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 == 0) {
//     document.write(` ${i}`);
//   }
// }
// document.write(`<br>`);

// document.write('Odd:');

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 != 0) {
//     document.write(` ${i}`);
//   }
// }

// //No 08
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var inpA = prompt('Order name');
// var boll = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i] == inpA) {
//     boll = true;
//     document.write(`${A[i]} is available at index ${i}`);
//     break;
//   }
// }

// if (boll == false) {
//   document.write(`${inpA} not found`);
// }

// //No 09 to do again
// var arr = [24, 53, 78, 91, 12];
// var num;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//     num = arr[i];
//   }
// }
// document.write(`${num}`);

//No 10 to do again

// var arr = [24, 53, 78, 91, 12];
// var num;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < arr[i + 1]) {
//     num = arr[i];
//   }
// }
// document.write(`${num}`);

//No 18
var prd = 0;
for (var i = 1; i <= 7; i++) {}
document.write(prd);

// //No 19
// for (var i = 1; i <= 7; i++) {
//   for (var j = 7; j >= i; j--) {
//     document.write('* ');
//   }
//   document.write('<br>');
// }

//No 20

// for (var i = 0; i < 4; i++) {
//   for (var j = 0; j < 5; j++) {
//     document.write('*');
//   }
//   document.write('<br>');
// }
// document.write('<br>');

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write('*');
//   }
//   document.write('<br>');
// }
// document.write('<br>');

// for (var i = 1; i <= 5; i++) {
//   for (var j = 5; j >= i; j--) {
//     document.write('*');
//   }
//   document.write('<br>');
// }
