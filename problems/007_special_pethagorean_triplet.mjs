/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

function pythagorean(){
    for(let a=1; a<1000; a++){
        for(let b=a+1; b<1000; b++){
            let c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
            if(a+b+c == 1000){
                return a*b*c
            }
        }
    }
}
console.log(pythagorean())