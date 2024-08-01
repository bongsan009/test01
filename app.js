

class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
let a = new Node(20)
let b = new Node(30)
let c = new Node(40)
let d = new Node(50)
let e = new Node(60);
let f = new Node(70);

root.left = a;
root.right = b;

a.left = c;
a.right = d;

b.left = e;
b.right = f;


function preOrder(root)
{
    if(root == null) return;

    preOrder(root.left);
    console.log(root.data);
    preOrder(root.right);
}

function TreeSum(root)
{
    if(root == null)
    {
        return 0;
    }
    let sumLeft =  TreeSum(root.left);
    let sumRight = TreeSum(root.right);

    return  root.data + sumLeft + sumRight;
}

function findMin(root)
{
    if(root == null)
    {
        return -Infinity;
    }

    let minLeft = findMin(root.left);
    let minRight = findMin(rol)
}


function calculator(start, end)
{
    let sum = 0;

    for(let i = start; i <= end; i += 10)
    {
        sum += i;
    }

    return sum;
}



function findMinBFS(root)
{
    let s = Infinity;
    const stack = [ root ];

    while(stack.length > 0)
    {
        const current = stack.pop();

        if(current.data < s)
        {
            s = current.data;
        }

        if(current.left != null)
        {
            stack.push(current.left);
        }

        if(current.right != null)
        {
            stack.push(current.right);
        }
    }

    return (s);
}


function findMinDFS(root)
{
    if(root == null)
    {
        return Infinity;
    }

    let minLeft = findMinDFS(root.left);
    let minRight = findMinDFS(root.right);

    let minOfLeftAndRight =  (minLeft < minRight)? minLeft : minRight;
    let value = root.data;

    return (value < minOfLeftAndRight)? value : minOfLeftAndRight;
}

console.log(findMinDFS(root))