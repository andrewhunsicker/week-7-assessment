const addToZero = (n, arr) => {
        return arr.some((item, i) => arr.slice(i+1).includes(n-item))  
}
// console.log(addToZero(0,[1, 2, 3, -2]))
// console.log(addToZero(0,[1,2,3]))
// O(n)


function hasUniqueChar(word) {
    let uniQuchar = new Set([])    
for(let i = 0; i < word.length; i++){
    uniQuchar.add(word[i])}
    return uniQuchar.size === word.length}

//  console.log(hasUniqueChar("Moonday"))
//  console.log(hasUniqueChar("Monday"))
//O(n)
 

let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase()
    return alphabets.every(x => string.includes(x));
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice")
// )
//O(1)
 longestStringReduce = (arr) => {
    return arr.reduce((a, b) => a.length < b.length ? b : a, "");
  }
  console.log(longestStringReduce(["hi", "hello", "thomas"]))
//O(n)

