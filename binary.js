let n=11

let l=[]

while(n!=0)
{
	l.push(Math.floor(n%2))
	n=Math.floor(n/2)
}

console.log(l.reverse())
