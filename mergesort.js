function merge(left,right)
{
	let res=[]
	while(left.length && right.length)
	{
		if(left[0]<right[0])
		{
			res.push(left.shift)
		}
		else{
			res.push(right.shift)
		}
	}
	return res.concat(left,right)
}

function mergesort(n)
{
	let l=n.length
	if(n.length<2)
	{
		return n
	}

	let mid=Math.floor(l/2)
	let leftsub=mergesort(n.slice(0,mid))
	let rightsub=mergesort(n.slice(mid))
	


	return merge(leftsub,rightsub)

}

let unsort=[1,4,3,7,9,4,7]
console.log(mergesort(unsort))



