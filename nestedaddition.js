
function nested(n)
{
	let sum=0
	
	if(typeof(n)=='number')
	{
		return n
	}
	else
	{
		for(let i=1;i<=n.length;i++)
		{
			sum=sum+nested(n[i-1])
		}
	}

	return sum





}

let l=3
console.log(typeof(l))

console.log(nested([1,1,[1,1],[1,1,[1,1]]]))
