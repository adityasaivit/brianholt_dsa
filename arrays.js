let numb=[]

// basic syntax

console.log(numb.length)

// .length used to reu=turn the length of the array

let num=[1,2,3,4,5]
console.log(num.length)

// non zero length

// also by calling array constructor

let ac=new Array();
console.log(ac.length)

let nac=new Array(1,2,3,4,5)
console.log(nac.length)
// non zero

// if we pass single argument it willl create an array of length of that number

let c=new Array(10);
console.log(c.length)
console.log(c)
// if no value were given they were undefined

// in an array there is no type constraint

let a=[1,'aditya','sai',99.9,true]

console.log(a)

// Array.isArray(<variablename>)  will tell wether it was anarray or not

let n=5;
console.log(Array.isArray(n))
console.log(Array.isArray(a))

// accessing and writing elements

nums=[]

for(let i=1;i<=10;i++)
{
	nums[i-1]=i
}
console.log(nums)

// array elements could also be accessed using [] operator

let sum=0;

for(let i=1;i<=nums.length;i++)
{
	sum=sum+nums[i-1]
}

console.log(sum)

// always prefer using .length property because there is a possibility of 
// changing of the size of an array

// cheating of arrays using of strings

let sentence="my name is aditya"

let sarr=sentence.split(' ')
console.log(sarr)

// using split() method we could separate the words in the sentence
// output--> [ 'my', 'name', 'is', 'aditya' ]

// representation
for(let i=1;i<=sarr.length;i++)
{
	console.log("word "+i+' is '+sarr[i-1])
}

// aggregate array operations
// assignment operator

let copynums=nums
console.log("copynums:")
console.log(copynums)

// when we assign one array to another by '=' it will copy the address
// any change in either of arrays will reflect in another

copynums[0]=400

console.log(copynums)
console.log(nums)
let copynums1=new Array(nums.length)

// to avoid it we use loops to copy properly

for(let i=1;i<=nums.length;i++)
{
	copynums1[i-1]=nums[i-1]
}

copynums1[1]=200
console.log(nums)
console.log(copynums1)


// searching for a value
// we can use the <variable>.indexOf(<key>) function to find the index of the key
// if we found returns the first index of key or -1


let names=['adi','srinivasarao','srinivasarao','rajyalakshmi','ammu']

console.log(names.indexOf('adi'))
console.log(names.indexOf('srinivasarao'))

console.log(names.indexOf('aditya'))

// string representation of the arrays

// we can convert the array to string by using <varname>.join(<separator>(optional)) and <varname>.tostring() functions

console.log(names.join())
// .join() function will join with , as a separation(default)

console.log(names.join('-'))

console.log(names.toString())

// we could create new arays from existing arrays

let newn=['mike','clayton','terrilin','jennifer']
let second=['raymond','bryan','cynthria']

console.log(newn.concat(second))




console.log(newn)

// splice function will use as to create a subarray

console.log(newn.splice(1,3))
// both were inclusive and index numbers

// adding elements to the arrays

newn.push('john')
console.log(newn)

newn.push('jennifer')
newn.push('mary')
console.log(newn)


// to add a new number we use unshift() function 

newn.unshift('trump')
console.log(newn)


// to remove the elements from the array

// pop() function

newn.pop()
console.log(newn)
// by shift() function

newn.shift()
console.log(newn)

// to reverse of an array use <variblename>.reverse()

console.log(newn)
newn.reverse()
console.log(newn)

// to sort the elements use .sort() function

console.log(newn)
newn.sort()
console.log(newn)

// .sort() function will sort the array lexicographically
newn.push('adi')
newn.sort()
console.log(newn)


// important

// iterative functions
// .forEach() method which eill take function as an argument

num=new Array();
for(let i=1;i<=10;i++)
{
	num.push(i)
}

function square(i)
{
	console.log(i,i*i)
}

num.forEach(square)

// we can use every() which will also takes functon as an argument
// and tells wether it is an true or false only not any other


function iseven(i)
{
	if(i%2==0)
	{
		return true;
	}
	else{
		return false;
	}
}

let even=num.every(iseven)
if(even)
{
	console.log("all are even numbers")
}
else{
	console.log("all are not even numbers")

}

// we can use .forEach() and .every() as iterative function

// .some() return true if one of them return true

// num=[1,3,5,7]
even=num.some(iseven)
if(even) console.log("atleast one is even")
	else console.log("none of them were even")



// reduce() function

// function add(runningTotal, currentValue) { return runningTotal + currentValue;
// }
// var nums = [1,2,3,4,5,6,7,8,9,10]; var sum = nums.reduce(add); print(sum); // displays 55

// iterator fuction that produce new arrays

// .map function will work as forEach but returns a new array

function increment(grade)
{
	return grade+5
}


for(let i=1;i<=10;i++)
{
	num[i-1]=i
}
console.log(num)

let inum=num.map(increment)
console.log(inum)


// for string
let name="chowdary adithya sai vidivada"

let namear=name.split(' ')
function getfirst(name)
{
	return name[0]
}

let resar=namear.map(getfirst)

console.log(resar.join(""))



// filter the method which will return the all the values in an arry in array which will satisfy the function
















