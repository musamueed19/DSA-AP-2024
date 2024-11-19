/*
Array:       | 1 | 2 | 3 | 4 | 5 |

When we talk about an "subarray", it is the continous part of the given array

NOTE: An Array on its own is also a valid subarray.

An array of 'n' elements - contains set of all possible  1 to n elements "subarray". 


In Mathematics:
If array has 'n' elements, then the
Total No. of Subarray = n (n + 1) / 2

NOTE: Every subarray has its own "startIndex" and "endIndex", like 0 to 1 index (contains 2 elements).

If we need possible subarrays related to the specific starting index, like 0. Then, we will go from 1 to each possible index of an 'n' elements array.
For Example;
NOTE: An 0 startIndex, will result in possible of (n - 0) subarrays. 




*/

let array = ['a', 'b', 'c', 'd'];
let subarray = "";

function allSubarrays(arr) {
    let noOfSubarrays = 0;
    for (let start = 0; start < arr.length; start++) {
        for (let end = start; end < arr.length; end++) {
            for (let i = start; i <= end; i++)
                subarray += arr[i];
            subarray += " ";
            noOfSubarrays++;
        }
        console.log(subarray);
        subarray = "";
    }

    console.log(`Total number of possible subarrays are: ${((arr.length) * (arr.length + 1)) / 2} (using Math)\n(using count) are: ${noOfSubarrays}`);
    
}


allSubarrays(array);