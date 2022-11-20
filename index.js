'1'
// function fizzbuzz(n){
//     return Array.from({length: n}, ( _, index) => index + 1)
//     .map(e => e % 15 == 0 ? 'FizzBuzz':
//      e % 3 == 0 ? 'Fizz':
//       e % 5 == 0 ? 'Buzz' : e)
// }
// console.log(fizzbuzz(3))

'2'

// function largest(n,xs){
//     return xs.sort((a, b) => a-b).slice(xs.length - n)
// }
// console.log(largest(2,[10,9,8,7,6,5,4,3,2,1]),[9,10])

'3'

// function* nextElementGenerator(array) {
//   while(true){
//     yield * array
//   }
// }
// console.log(nextElementGenerator())

'4'

// function findMaxProduct(arr){
//     let result = [],
//         product = 1
//     for(let i = 0; i< arr.length; i++){
//         for(let j = i; j< arr.length; j += i + 1){
//             product *= arr[j]
//         }
//         result.push(product)
//         product = 1
//     }
//     return Math.max(...result)
// }

'5'

// var isSquare = function(arr){
//     return arr.length ? arr.every(e => Math.sqrt(e) % 1 == 0): undefined    
// }

'6'

// var number=function(array){
//     return array.map((e, i) => `${i + 1}: ${e}`)
// }

'7'
// function sortByLength (array) {
//     return array.sort((a, b) => a.length - b.length)    
// }

'8'

// function minSum(arr) {
//     return arr.sort((a, b) => a-b).reduce((x, y) => x + y * arr.pop(), 0)
// }
// console.log(minSum([5,4,2,3]));

'9'

// function removeSmallest(numbers) {
//     return numbers.filter((_ , i) => i != numbers.indexOf(Math.min(...numbers)))
// }
// console.log(removeSmallest([1, 2, 3, 4, 5], [2, 3, 4, 5]))

'10'

// const sortme = function( names ){
//     return names.sort()
// }
// console.log(sortme(['one', 'two', 'three']))

'11'

// function likeOrDislike(buttons) {
//     return buttons.reduce((a, b) => a == b ? Nothing : c.Nothing)
// }

// console.log(likeOrDislike([Dislike]))

'12'

// function rowSumOddNumbers(n) {
// 	return n ** 3
// }

'13'

// function smallEnough(a, limit){
//     return a.every(e => e <= limit)
// }

'14'

// function adjacentElementsProduct(array) {
//     let result = []
//     for(let i = 0; i < array.length -1; i++){
//         result.push(array[i] * array[i+1])
//     }
//     return Math.max(...result)
// }

'15'

// function leastLarger(a,i) {
//     return a.indexOf(Math.min(...a.filter(e => e > a[i])))
// }

'16'

// function oddOrEven(array) {
//     if(array.length == 0) return 'even'
//     else{
//         let arr = array.reduce((a, b) => {return a + b}) 
//         return (arr % 2 == 0) ? 'even' : 'odd'
//     }
   
// }

'17'

// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(''), 2)
// };

'18'

// function switcher(x){
//     return (reverse = ' zywvutsrqponmlkjihgfedcba!? ', 
//     x.map(e => reverse[e]).join(''))
// }

'19'

// function flattenAndSort(array) {
//     return [].concat(...array).sort((a, b)=> a-b)
// }

'20'

function isNice(arr){
    return arr.length != 0 ? arr.every(e => arr.some(el => e == el +1 || e == el -1)) : false
}