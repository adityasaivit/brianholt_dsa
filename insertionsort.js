
function insertionSort(nums) {
  // code goes here

  for(let i=1;i<nums.length;i++)
  {

    let numToInsert=nums[i];
    let j;
    for(j=i-1; nums[j]>numToInsert && j>=0;j--)
    {
      nums[j+1]=nums[j];

    }
    nums[j+1]=numToInsert
  }
  console.log(nums)
  return nums;
}

// unit tests
// do not modify the below code

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
let res=insertionSort(nums);

console.log(res)

