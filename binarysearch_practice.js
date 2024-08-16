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



