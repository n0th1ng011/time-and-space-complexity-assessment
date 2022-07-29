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

// 2. Unique Characters
function hasUniqueChars(str){
    return new Set(str).size === str.length
}
console.log(hasUniqueChars('cat'))

// 3. Pengram Sentance

// 4. Longest Word