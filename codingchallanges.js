// 1. Sum Zero
let nums = [1, 3, 9, 5, 18, -5, 42]

for(let i = 0; i < nums.length; i++) {
    for(let y = 0; y < nums.length; y++) {
         if( y !== i) {
            if(nums[y] + nums[i] === 0) {
                console.log(true)
            }
        }
    }
}

// Review
const addToZero = (array) => {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(i !== j){
                if(array[i] = array[j] === 0){
                    console.log(true)
                    return
                }
            }
        }
    }
    console.log(false)
    return
}

//O(n)

// 2. Unique Characters
function hasUniqueChars(str){
    return new Set(str).size === str.length
}
console.log(hasUniqueChars('cat'))

//O(n)

// 3. Pengram Sentance
const isPangram = (str) => {
    let pangramArray = str.toLowerCase().replace(/[^a-z]+/g, '').split('')
    let pangramSet = new Set()

    for(let i = 0; i < pangramArray.length; i++){
        pangramSet.add(pangramArray[i])
    }
    if(pangramSet.size === 26){
        console.log(true)
    }else{
        console.log(false)
    }

}
//O(n)

// 4. Longest Word
const findLongestWord = (arr) => {
    let longestCount = 0 

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longestCount){
            longestCount = arr[i].length
        }
    }
    console.log(longestCount)
}
//O(n)