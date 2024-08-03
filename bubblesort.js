

function bubbleSort(nums) {
    // code goes here
    let repeat=true;
    while(repeat!=false)
      {
        repeat=false
        
       
        for(let i=1;i<nums.length;i++)
          {
            if(nums[i-1]>nums[i])
              {
                let temp=nums[i-1]
                nums[i-1]=nums[i]
                nums[i]=temp
                repeat=true
              }
          }
  
      }

      return nums
  
  }
  
  // unit tests
  // do not modify the below code

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const sortedNums = bubbleSort(nums);

console.log(sortedNums)

  