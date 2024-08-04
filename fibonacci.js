let i=0

function fibonacci(n1,n2)
{
	let sum=n1+n2
	console.log(sum)
	i++;
	if(i>100)
	{
		return
	}

	fibonacci(n2,sum)

}
console.log(0)
console.log(1)
fibonacci(0,1)


let i1=11

let c=0;
while(i1>0)
{
	if(i1%10==1)
	{
		c++;
		i1=Nmber(i1/10)
		console.log(i1)
	}
	else{
		i1=i1/10
	}

}

console.log(c)