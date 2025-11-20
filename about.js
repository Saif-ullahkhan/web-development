function Students(){
    let Studentlist = document.getElementById("student-list");
    let student = document.querySelectorAll("#student-list li");
    const addItembtn = document.getElementById("add-item");
    const removeItembtn = document.getElementById("remove-item");
    const replaceItembtn = document.querySelector(".replace-item");

    console.log(student);

    // addItembtn.addEventListener('click',addbtn);

    // let addbtn = function(){
    //     let getitem = prompt("Enter item to add:");
    //     const newitem = document.createElement('li');
    //     newitem.textContent = getitem;
    //     Studentlist.appendChild(newitem);
    // }

    let addbtn = function(){
        let getitem = prompt("Enter item to add:");
        const newitem = document.createElement('li');
        newitem.textContent = getitem;
        Studentlist.append(newitem);
        alert("item added successfully.");
    };

    addItembtn.addEventListener('click',addbtn);

    function removeItem(){
        const indexnum = prompt("Enter index of item to remove:");
        const index = Number(indexnum) - 1;
    //     if (index<0||index>=student.length){
    //         alert("Invalid");
    //     }else{
    //         Studentlist.removeChild(Studentlist.children[index]);
    //         // student[index].remove();
    //     }
    // }
        Studentlist.removeChild(Studentlist.children[index]);
    }


    removeItembtn.addEventListener('click',removeItem); //steps for replacing an element 
                                                        //1. Create an element you want to repplace with 
                                                        //2. add the text you want to replace with using createTextNode();
                                                        //3.use the parentNode.replaceChild(newNode,oldNode);

    function replace(){
        const element = document.createElement("li"); 

        // Create a new text node:
        let getreplaceItem = prompt("enter item that you want to replace");
        const textNode = document.createTextNode(getreplaceItem);

        // Append the text node to the <li> element:
        element.appendChild(textNode);
        let replacewith = prompt("with which item number you want to replace:");
        const index  = Number(replacewith) - 1;


        Studentlist.replaceChild(element,Studentlist.children[index]);
    }

    replaceItembtn.addEventListener('click',replace);

    

    
}

Students();
