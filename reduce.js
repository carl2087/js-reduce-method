  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator: ", acc,
    "Current value: ", curr,
    "Total: ", acc + curr
  );
  return acc + curr;
}, 0);
console.log(sum)

// Must specify a initial value to start with above is zero below is ten
const nums1 = [0, 1, 2, 3, 4];
let sum1 = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator: ", acc,
    "Current value: ", curr,
    "Total: ", acc + curr
  );
  return acc + curr;
}, 10);
console.log(sum1)

// Simplified
const nums2 = [0, 1, 2, 3, 4];
let sum2 = nums2.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
// Remember to have initial value to stop bugs in code ((, 0)below)
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience)


// Grouping by a property, and totaling it too
// The initial value in this block of code is {}
let experianceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experianceByProfession)
