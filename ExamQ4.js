

// Q5 ------------------ Find all duplicates and return the smallest value one --------- //

function findDuplicateSmallestVal(arr)
{
    let countMap = {};
    let smallestNum = -Infinity;

    for (const val of arr)
    {
        if (val in countMap)
        {
            countMap[val] += 1;
        }
        else
        {
            countMap[val] = 1;
        }

        // when duplicate detected
        if (countMap[val] > 1)
        {
            // Register the first duplicated value
            if (smallestNum === -Infinity)
            {
                smallestNum = val;
            }
            else
            {
                if (val < smallestNum)
                {
                    smallestNum = val;
                }
            }
        }
    }
    return smallestNum;
}


let nums = [4, 10, 5, 1, 11, 5, 1, 4, 1];
let nums2 = [1, 10, 1, -1, 10, -1];
let nums3 = [1, 10, 1, -1, 10, -1, -1, -20, -20];
let nums4 = [1, 10, 3, 3, 10, 20, 200, 200];

console.log(findDuplicateSmallestVal(nums));
console.log(findDuplicateSmallestVal(nums2));
console.log(findDuplicateSmallestVal(nums3));
console.log(findDuplicateSmallestVal(nums4));