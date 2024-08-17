

// Q2 ---------------- Found Value -------------- //

function searchValueIndexReturn(arr, val)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] >= val)
        {
            return i;
        }
    }
    return arr.length - 1;
}


let nums = [1, 3, 5, 6];
let nums2 = [-4, 0, 1, 3, 7, 50, 100, 125];

console.log(searchValueIndexReturn(nums, 3));
console.log(searchValueIndexReturn(nums, 5));
console.log(searchValueIndexReturn(nums, 2));

console.log(searchValueIndexReturn(nums2, 50));
console.log(searchValueIndexReturn(nums2, 70));
console.log(searchValueIndexReturn(nums2, -3));