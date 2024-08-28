function isPalindrome(str) {
    let left = 0
    let right = str.length - 1
    if (left < right) {
      if (str[left] === str[right]) {
        return true
      }
      left++
      right--
    }
    return false
  }
  
aetf
  const result = isPalindrome("A man, a plan, a canal, Panama");
  console.log(result)

 

// function isPalindrome(str){
//     return str === str.split('').reverse().join('')
// }

// console.log(isPalindrome("Hello")) 
