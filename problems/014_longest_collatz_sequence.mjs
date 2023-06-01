// /*
// Euler Project Problem 14 : Longest Collatz Sequence | Javascript
// The following iterative sequence is defined for the set of positive integers:

//  n -> n/2 (is even)
//  n -> 3n + 1(is odd)
// Using the rule above and starting with , we generate the following sequence:
// It can be seen that this sequence (starting at and finishing at) contains terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at .
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.
// */

function lengthOfSequenceOf(num){
    const numSequence = []
    while(num!==1){
        numSequence.push(num)
        if(num%2==0){
            num = num/2
        } else {
            num = (3*num) + 1
        }
    }
    return 1+numSequence.length
}
console.log(lengthOfSequenceOf(13))

var max = 1000000
var maxLength = 10
var numSequenceLength 
var numberWithMaxLength 
var numSequence = [] 
var num
const mapInu = new Map()
for(let i = 2; i<max; i++){
    num = i
    numSequenceLength = 1
    while(num!==1){
        if(!mapInu.has(num)){
            numSequenceLength+=1
            if(num%2==0){
                num = num/2
            } else {
                num = (3*num) + 1
            }
        } else {
            numSequenceLength += mapInu.get(num)
            break
        }
    }
    mapInu.set(i, numSequenceLength)
    if(numSequenceLength>maxLength){
        maxLength = numSequenceLength
        numberWithMaxLength = i
    }
}

console.log(numberWithMaxLength)

