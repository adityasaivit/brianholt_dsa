// in linked list elements were not placed continously 
// in the memory location 
// linked list has no size limit
// it is easy to add or to remove the elemnts form the linked list

// in linkedlist we cannot access the element directily we need to traverse 
// to get the element

let size=0

class linkedlist
{
	constructor()
	{
		this.head=null
	}
	push(v)
	{
		let c=this.head
		if(this.head===null)
		{
			
			this.head=new node(v)
			size++
		}
		else{
			while(c.next)
			{
				c=c.next
			}
			c.next=new node(v)
			size++

			

		}
	}

	display()
	{
		let cp=this.head

		while(cp)
		{
			console.log(cp.val)
			cp=cp.next
		}
	}

	insert(v,p)
	{
		if(p==1)
		{
			let newn=new node(v)
			newn.next=this.head
			this.head=newn
		}
		else{
			let cn=this.head

			for(let i=1;i<=p-2;i++)
			{
				cn=cn.next
			}
			let newn=new node(v)
			newn.next=cn.next;
			size++;
			cn.next=newn;
		}
	}
	isempty()
	{
		return this.head===null
	}
	remove(v)
	{
		if(this.head.val==v)
		{
			this.head=this.head.next
		}
		else{
			let curr=this.head

			while(curr.next.val!=v)
			{
				curr=curr.next
			}
			curr.next=curr.next.next
			console.log(v)
		}
	}
	indexof(v)
	{
		let ind=0;
		if(this.head==null)
		{
			return -1
		}
		else{
			let c=this.head
			while(true)
			{
				if(c.val==v)
				{
					return ind
				}
				c=c.next
				ind++
			}
			return -1

		}
	}


}

class node{
	constructor(v)
	{
		this.val=v
		this.next=null
	}
}

let l=new linkedlist()

l.push(1)
l.display()

l.push(2)
l.push(3)
l.push(4)
l.display()
console.log("\n\n\n")
l.insert(6,2)
l.display()
console.log("\n")
l.insert(9,4)
l.display()

console.log(l.isempty())
l.display()
l.remove(9)
console.log("\n")
l.display()


console.log("\n"+l.indexof(6))


