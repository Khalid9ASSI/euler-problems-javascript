/*
GCD : Greatest Common Divisor
Algorithms:
> Euclidian algorithm : Principle, if we keep substracting one, gcd doesn't care :)
*/
export { gcd, lcm}

function gcd(a, b){
    if(a == 0) return b; 
    return gcd(b%a,a)
}

function lcm(num1, num2){
    return Math.floor((num1*num2)/gcd(num1, num2))
}