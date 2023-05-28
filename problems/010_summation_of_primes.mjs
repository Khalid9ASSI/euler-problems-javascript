// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

import { sum } from "mathjs"
import {getPrimesUpTo} from "../algorithms/sieve_of_eratosthenes.mjs"
const primesBelow2M = getPrimesUpTo(2000000)
console.log(primesBelow2M.reduce((a,b)=>a+b))