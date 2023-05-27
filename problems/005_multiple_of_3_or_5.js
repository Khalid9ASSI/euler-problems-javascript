/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

const N = 100000
function sumDiv(n){
    p = Math.floor((N-1)/n)
    return Math.floor(n*(p*(p+1))/2)
}

console.log((sumDiv(3)+sumDiv(5)-sumDiv(15)))
// 0.174 secs