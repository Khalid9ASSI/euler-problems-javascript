/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/
function largestPalindrome(){
    var isPalandrome
    const palindromes = []
    for(let i=999; i>100; i--){
        for(let j=999; j>100; j--){
            isPalandrome = true
            for(let k=0; k<3; k++){
                if((i*j).toString()[k] != (i*j).toString()[5-k]){
                    isPalandrome = false
                    break
                }
            }
            if(isPalandrome){
                palindromes.push(i*j)
                break
            }
        }
    }
    console.log(palindromes.length)
    return Math.max(...palindromes)
}
console.log(largestPalindrome())