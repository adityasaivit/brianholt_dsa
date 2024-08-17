class tree{
	constructor()
	{
		this.root=null
	}

	add(value)
	{
		let current=this.root
		if(this.root===null)
		{
			this.root=new node(value)
			return
		}
		while(true)
		{
			if(value<current.value)
			{
				if(current.left)
				{
					current=current.left
				}
				else{
					current.left=new node(value)
					break
				}
			}
			else{
				if(current.right)
				{
					current=current.right
				}
				else{
					current.right=new node(value)
					break

				}
			}
		}

	}
	display()
	{
		return disp(this.root)
	}

	search(val)
	{
		let current=this.root;
		if(current===null)
		{
			return 'Invalid'
		}
		else{
			while(current)
			{
				if(current.value==val)
				{
					return 'found'
				}
				else if(val<current.value)
				{
					current=current.left;
				}
				else if(val>current.value)
				{
					current=current.right;
				}
			}
			return 'not found'
		}
	}

		


}


function disp(root)
{
	if(root)
	{
		console.log(root.value)
		disp(root.left)
		disp(root.right)
	}
}



class node{

	constructor(val)
	{
		this.value=val
		this.left=null
		this.right=null
	}
}
// recursive approach for the breathfirstsearch

function bfs(queue,array)
{
	if(queue.length==0)
	{
		return array
	}

	let node=queue.shift();
	if(node)
	{
		array.push(node.value)
		queue.push(node.left)
		queue.push(node.right)

	}
	

	return bfs(queue,array)
}

let nt=new tree()

nt.add(10)
nt.add(4)
nt.display()
console.log("\n\n\n")

nt.add(12)
nt.add(5)
nt.add(3)
nt.display()
console.log("\n\n\n")
console.log(nt.search(5))


// breath first search

let q=[nt.root.left,nt.root.right]
let a=[nt.root.value]



console.log(bfs(q,a))

// by iterative method

let iterativebfs=(queue,array)=>{

	while(queue.length)
	{
		let temp=queue.shift()
		array.push(temp.value)
		if(temp.left)
		{
			queue.push(temp.left)
		}
		if(temp.right)
		{
			queue.push(temp.right)
		}
	}

	return array

}

console.log(iterativebfs(q,a))







