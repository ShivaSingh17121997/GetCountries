// const arr = ['hello', 'world', 'hello', 'india', 'india', 'hello', 'world']

// find no. of times element occure

// function uniqueElement(a) {

//     const obj = {};
//     for (let i = 0; i < a.length; i++) {
//         if (obj[a[i]]) {
//             obj[a[i]] = obj[a[i]] + 1
//         } else {
//             obj[a[i]] = 1
//         }
//     }
//     for (let key in obj) {
//         console.log(obj[key] , key)

//     }
// }

// uniqueElement(arr)


// const nums = [0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3]

// function unique(arr) {

//     let arr1 = [...new Set(arr)]
//     console.log(arr1)
// }

// unique(arr).

// function unique(nums) {
//     let uniquearr = []
//     let left = 1;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[left] = nums[i];
//             uniquearr.push(nums[left])
//             left++;
//         }
//     }
//     console.log(uniquearr)
// }

// unique(nums)

function discount(prices, discount) {
    let max = -Infinity;
    let sum = 0;

    // Step 1: Find the maximum price
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > max) {
            max = prices[i];
        }
    }

    // Step 2: Apply discount only to the maximum price
    let discountMax = max * (1 - discount / 100);

    // Step 3: Calculate the sum with discount applied to the maximum price
    sum = prices.reduce((acc, curr) => acc + (curr === max ? discountMax : curr), 0);

    console.log(sum); // Output should be 620
}

discount([100, 200, 400], 20);
