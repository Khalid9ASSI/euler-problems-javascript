/*
Euler Project Problem 14 : Longest Collatz Sequence | Javascript
The following iterative sequence is defined for the set of positive integers:

 n -> n/2 (is even)
 n -> 3n + 1(is odd)
Using the rule above and starting with , we generate the following sequence:
It can be seen that this sequence (starting at and finishing at) contains terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at .
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

function lengthOfSequenceOf(num){
    var tempNum=num
    const numSequence = []
    while(num>1){
        numSequence.push(num)
        if(num%2==0){
            num = num/2
        } else {
            num = 3*num + 1
        }
        if(num>1000000){
            console.log(num)
        }
    }

    return 1+numSequence.length
}
// console.log(lengthOfSequenceOf(13))

const mapInu = new Map()
var maxLength = 10
var numSequenceLength 
for(let i = 2; i<=1000000; i++){
    numSequenceLength=lengthOfSequenceOf(i)
    if(numSequenceLength>maxLength){
        maxLength = numSequenceLength
    }
}

console.log(maxLength)