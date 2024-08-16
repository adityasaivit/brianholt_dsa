class Tree{
    constructor(){
        this.root=null;
    }

    addNode(value)
    {
        if(this.root===null)
        {
            this.root=new treeNode(value)
            return;
        }
        let current=this.root;
        while(true)
        {
            if(value<current.val)
            {
                if(current.left)
                {
                    current=current.left;
                }
                else{
                    current.left=new treeNode(value);
                    break;
                }
                
                
            }
            else 
            {
                if(current.right)
                {
                    current=current.right;
                }
                else{
                    current.right=new treeNode(value);
                    break;

                }
                
            }
        }
    }
}

function display(root)
{
    if(root)
    {
        console.log(root.val)
        display(root.left)
        display(root.right)

    }
    


}

class treeNode{
    constructor(value){
        this.val=value;
        this.left=null;
        this.right=null;
    }
}

let tr=new Tree();
tr.addNode(5)
tr.addNode(4)
tr.addNode(7)
tr.addNode(2)
tr.addNode(6)
tr.addNode(3)

display(tr.root)
