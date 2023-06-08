/*
Given a mixed array of number and string representations of integers, 
add up the non-string integers and subtract the total of the string integers.
Return as a number.
*/


// Solution

function divCon(x) {
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}

// or