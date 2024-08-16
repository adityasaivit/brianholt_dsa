class Tree{
    constructor(){
        this.root=null;

    }
    add(value)
    {
        if(this.root===null)
        {
            this.root=new Node(value)
            console.log(value)
        }
        else{
            let current=this.root;
            while(true)
            {
                if(current.value>value)
                {
                    // left
                    if(current.left)
                    {
                        current=current.left;
                    }
                    else{
                        current.left=new Node(value)
                        console.log(value)
                        break;
                        
                    }
                }
                else{
                    if(current.right)
                    {
                        current=current.right;
                    }
                    else{
                        current.right=new Node(value)
                        console.log(value)
                        break;
                    }
                    // right
                }
            }
            // try using this

        }

    }
   
    toobject()
    {
        return this.root.value
    }
   
}

function display(root)
{
    if(root)
    {
        console.log(root.value)
        display(root.left)
        display(root.right)

    }
    else{
        return
    }
    


}

class Node{

    constructor(value){
        this.value=value
        this.left=null;
        this.right=null;
    }
}


let tr=new Tree();

tr.add(10)
tr.add(2)
tr.add(12)
tr.add(7)
tr.add(11)
console.log(tr.toobject())
console.log("\n\n\n\n")
display(tr.root)




