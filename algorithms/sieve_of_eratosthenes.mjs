/*

In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit.
To find all the prime numbers less than or equal to a given integer n by Eratosthenes' method:
Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
Initially, let p equal 2, the smallest prime number.
Enumerate the multiples of p by counting in increments of p from 2p to n, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).
Find the smallest number in the list greater than p that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.
GIF: https://en.wikipedia.org/wiki/File:Animation_Sieve_of_Eratosth.gif
*/

export {getPrimesUpTo}

function getPrimesUpTo(number){
    const arr = [];
    for(let i=2; i<number+3; i++){
        arr.push(true);
    }
    for(let i=2; i<=number+3; i++){
        if(arr[i]){
            for(let j=i*i; j<=number+3; j+=i){
                arr[j]=false
            }
        }
    }
    const primes = arr.map((val, indx) => [val,indx]).filter(([val, indx]) => val == true).map(([val,indx]) => indx).slice(2)
    return primes
}

