
// Q1 ---------- Reverse an Integer ------------- //

function ReverseAnInteger(val)
{
    const signVal = val < 0 ? -1 : 1;

    const strReverseVal = val.toString().trim().split("").reverse().join("");

    const reverseVal = parseInt(strReverseVal);

    if (isNaN(reverseVal))
    {
        return "Entry is not a valid input";
    }
    return parseInt(strReverseVal) * signVal;
}

console.log(ReverseAnInteger(123));
console.log(ReverseAnInteger(-456));
console.log(ReverseAnInteger("AVBC"));