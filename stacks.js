// implementation of stacks

// queues and stackwere the controlled insertion and deletion of elements of arrays

// adding elements in stack
// popping of the elements
// how to use stack class
// decimal to binary problem

// stack follows first-in-last-out(last-in-first-out)

// the last end was called as the top
// the first /starting end was called as base

class stack
{
	constructor()
	{
		this.list=[]
	}
	push(element)
	{
		this.list.push(element)
	}
	pop(element)
	{
		return this.list.pop()
	}
	peek()
	{
		return this.list[this.list.length-1]
	}
	clear()
	{
		this.list=[]
	}
	size()
	{
		return this.list.length
	}
	isempty()
	{
		return this.list.length==0
	}
	display()
	{
		for(let i=1;i<=this.list.length;i++)
		{
			console.log(this.list[i-1])
		}
	}
}


let s=new stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.display()
s.pop()
console.log("\n\n\n")
s.display()
console.log("\n"+s.peek())

console.log(s.isempty())


// to convert the decimal to binary

let dtb=new stack();


let n=3436090384;

while(n!=0)
{
	dtb.push(Math.floor(n%2))
	n=Math.floor(n/2)
}

let output=''

while(dtb.size())
{

	output+=dtb.pop()


}

console.log(output)

