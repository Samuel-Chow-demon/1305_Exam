
// Q3 ---------- Delete A Node in LinkedList ------------- //

class node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

function removeNode(targetNode)
{
    // Couldn't figure out why cannot modify the reference and reflect back to the related list
    // targetNode = targetNode.next;

    // Just perform the value changes
    targetNode.val = targetNode.next.val;
}

// function removeNode(headNode, targetVal)
// {
//     let prevNode = null;
//     let current = headNode;

//     while (current)
//     {
//         // Target Node found
//         if (current.val === targetVal)
//         {
//             if (prevNode != null)
//             {
//                 prevNode.next = current.next;
//             }
//             // if no prevNode means at the head
//             else
//             {
//                 headNode = current.next;
//             }
//         }
//         prevNode = current;
//         current = current.next;
//     }
//     return headNode;
// }

function printAllNode(headNode)
{
    let nodes = [];
    let current = headNode;
    while (current)
    {
        //console.log(current.val);
        nodes.push(current.val);
        current = current.next;
    }
    console.log(nodes.join(","));
}


let n4 = new node(4);
let n5 = new node(5);
let n1 = new node(1);
let n9 = new node(9);

n4.next = n5;
n5.next = n1;
n1.next = n9;

// Print all nodes
printAllNode(n4);

// Remove the "5" value node
removeNode(n5);

// Print the result after remove
printAllNode(n4);



//// Resume the linkage
n4 = new node(4);
n5 = new node(5);
n1 = new node(1);
n9 = new node(9);

n4.next = n5;
n5.next = n1;
n1.next = n9;

printAllNode(n4);

// Remove the "4" value node
removeNode(n4);

// Print the result after remove
printAllNode(n4);






