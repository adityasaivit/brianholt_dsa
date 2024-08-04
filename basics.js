console.log("hello javascript")

let monthlyrent=500
let annualrent=monthlyrent*12

console.log(annualrent)

const name1="Adithya Sai"

console.log(name1)

console.log(`you could also use backtics`)

// stirng concantination

console.log("hello welcome to class"+" "+name1);
console.log(`hello welcome to class ${name1}`)


let aditya=true
console.log(aditya)
aditya=false
console.log(aditya)


const skyIsBlue=false

if(skyIsBlue)
{
    console.log("sky is blue!")

}
else{
    console.log("sky is not ...blue")

}

const maxfriends=10
let currentfriends=0

while(currentfriends<maxfriends)
{
    currentfriends+=1
    console.log(currentfriends)
}
let timesToRepeat=10

let answer=""

let char="☺️"

while(timesToRepeat>0)
{
    answer+=char
    timesToRepeat-=1
}

console.log(answer)

console.log("".padStart(100,"☺️"))
console.log("".padEnd(10,"☺️"))


function locateHome(city,state,country)
{
    return `you are from ${city},${state} ${country}`
}

console.log(locateHome("Montain Viw","California","USA"))



let print=function ()
{
    console.log("Hello,Adithya")
}

print()

let square=function(n)
{
    return n*n
}

console.log(square(4))

// arrow function

let cube=(n)=>{
    return n*n*n
}

console.log(cube(3))

let display=()=> console.log("Display the name Adithya")

display()

// built in functions

let sentence="helLo How Are you"

console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
console.log(sentence[0])


console.log(sentence.substring(0,4))
console.log(sentence.substring(4))

console.log(sentence.toLowerCase())

const number=5.3
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))

// to get the random number

console.log(Math.random())

// string matching

const test1="hey this is adithya"

const test2="hello how are you"

const test3="hey this is srinivasa rao"

console.log(test1.includes("adi"))
console.log(test2.includes("ammu"))

console.log(test3.includes("rao"))
console.log(test1.includes("adi"))

// to find the date of now

console.log(Date.now())

// number of sec from 1 jan 1970


console.log(Date.now()/1000)

let obj={
    name:"adithya",
    regno:"22bct0087",
    address:"guntur",
    state:"washington"
}

console.log(obj.name)
console.log(obj.address)
console.log(obj["regno"])


// various type sof access of the objects

let func=(a,b)=>{
    return a+b
}

console.log(func(3,4))

let fun1=function (a,b){
    return a+b
}

console.log(fun1(3,4))


console.log(obj.state)

obj.state="california"

console.log(obj)


let music=function (p){
	if(p.age==='25-35')
	{
		console.log("you would love a")
	}
	else if(p.age==='36-65')
	{
		console.log("You would like b")
	}
	else
	{
		console.log("you would like c")
	}
}

let p1={
	name:"adithya",
	age:'36-65',
	state:"washington"
}
let p2={
	name:"adithya",
	age:'25-35',
	state:"washington"
}

music(p1.age)
music(p2.age)


let dog={
	name:"luna",

	sound()
	{
		console.log("func dunc")
	}
}

dog.sound()


console.log(console)

console.info("hi")


console.log(Math)
console.log(Math.PI)
console.log(Math.E)


let o={
	name:{
		firstname:'chowdary',
		middlename:'Adithya',
		lastname:'vidivada'
	},
	address:{
		city:"washington",
		state:"washington",
		country:"usa"
	}
}


console.log(o.name.firstname)
console.log(o.name.middlename)
console.log(o.name.lastname)
console.log(o.address.city,o.address.state,o.address.country)

let s="adi"
console.log(s.substring(2,3))


console.log(1/2)

let a="sdf"
console.log(a[0])
