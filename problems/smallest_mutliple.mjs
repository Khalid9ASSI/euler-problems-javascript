/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
import {gcd, lcm} from '../algorithms/greatest_common_divisor.mjs'

// Brute forced solution
// function smallestMultiple(){
//     var count 
//     var num = 20
//     while(true){
//         count = 0
//         for(let i = 20; i>=1; i--){
//             if(num%i!=0){ 
//                  break
//             } else (count++)
//         }
//         if(count == 20){
//             return num
//         }
//         num+=1
//     }
// }

// console.log(smallestMultiple())

// Optimized solution 

var result = 1
for(let j=1; j<21;j++){
    result = lcm(result, j)
}
console.log(result)
