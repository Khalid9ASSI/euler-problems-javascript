/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?

Erathosthenes Sieve with an approximate prime upper bound equation.
*/
import {getPrimesUpTo} from "../algorithms/sieve_of_eratosthenes.mjs"

var lim = 10001
var primes = getPrimesUpTo(lim)
while(primes.length < 10000){
    lim += 10000
    primes = getPrimesUpTo(lim)
}
console.log(primes[10000])