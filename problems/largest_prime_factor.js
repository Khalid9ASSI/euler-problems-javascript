/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

const lim = 600851475143   
var result = lim
const primeFactors = []
var count
function isPrime(num){
    count = 0
    for(j=num; j>0; j--){
        if(count>2){
            return false
        } else if(num%j==0){
            count++
        }
    }
    if(count==2){
        return true
    }
}

for(i=2; i<lim; i++){
    if(result == 1){
        break
    } else if(result%i==0 && isPrime(i)){
        primeFactors.push(i) 
        result = result / i
    }
}
console.log(Math.max(...primeFactors))