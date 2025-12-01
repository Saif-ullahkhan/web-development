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

// var myVar = "this is global scope - Var";

function varibleScope(){
    if (true){
        // console.log(myVar)
        const myVar = "this is block scope";
        console.log(myVar);
    }

}

varibleScope();

// console.log(myVar);


function practiceLoops(){
    const fruits = ["apple", "banana", "cherry"];
    for (let i = 0; i < fruits.length; i++) {
    console.log(`I love ${fruits[i]}`);
    }
    function for_inLoop(){
        user = {
            name : "saif",
            Id : 21,
            age: 24,
            Interests : "swimming, gym "
        };

        for (let key in user){
            console.log(user[key]);
        }
   }

   for_inLoop();
}
practiceLoops();

// function myCounter(){
//     displayCounter = document.getElementById("dis-counter");
//     counterElement = document.getElementById("counter-btn");
//     let counter = 0;
//     counterElement.addEventListener('click', ()=> {
//         counter +=1;
//         displayCounter.textContent = counter;
//     }
// );

// }
// myCounter();

function eventEx(){

    const parnetdiv = document.querySelector("#counter-container")
    const childdiv = document.querySelector("#counter")
    const btn = document.querySelector("#counter-btn")
    const para = document.querySelector("#dis-counter")


    parnetdiv.addEventListener('click',(e)=>{
        // e.stopPropagation();
        alert("This is parent" + e.currentTarget.tagName);

    },);
    childdiv.addEventListener('click',(e)=>{
        // e.stopPropagation();
        alert("This is child" + e.currentTarget.tagName);

    });
    para.addEventListener('click',(e)=>{
        alert("This is para"+ e.currentTarget.tagName);

    });
    btn.addEventListener('click',(e)=>{
        // e.stopPropagation();
        alert("This is button" + e.currentTarget.tagName);

    });


}

eventEx();

function newEvent(){
    const list = document.querySelector("#item-list");
    const newItem = document.createElement('li');
    newItem.classList.add("list-item");
    newItem.textContent = "new item";

    list.prepend(newItem);

    const btn = document.querySelector("#btn");
    btn.addEventListener('click',()=>{
        list.removeChild(list.children[0]);
    })

    
    list.addEventListener('click', (event) => {
 // Check if the clicked element is an li
    if (event.target.tagName === 'LI') {
    event.target.textContent = "Clicked!";
 }
});

}

newEvent();


//synchronous VS asynchronous javascript;

// console.log('Task 1');
// console.log('Task 3');
// setTimeout((e) => { 
//     console.log(e);
//     console.log("this is async function");
// }, 3000);

// console.log("start");

// setTimeout(()=>{
//     console.log("CB set timeout")
// }, 5000);

// fetch("https://api.netflix.com").then(function cbF(){
//     console.log("CB netflix");
// });

// console.log("END");


function doSomething(callback){
    console.log("Doing something:")
    callback();
    
}

function mycallback(){
    console.log("callback executed..");
}

doSomething(mycallback);


function greetUser(name,callback){
    console.log("Welcome," + name);
    callback();
}

function logIn(){
    console.log("User loggedIn!");
}

greetUser("saif",logIn);

function delayedMessage(message,callback){

    const m = setTimeout(() => {
        console.log("Message: ", message);
        callback();
    }, 2000);
    

}

function D(){
    console.log("Done!");
}

delayedMessage("Hello world",D);


function checkAge(age,success,error){
    if (age>= 18){

        success();

    }else{

        error();

    }
    
}

checkAge(20, 
    () => console.log("Allowed"),
    () => console.log("Not allowed")
);


function fetchData(callback){
    setTimeout(() => {
        
        const data = {
            username: "king",
            Id: 23
        };
    callback(data);
    }, 1500);
}

console.log("fetching data..");

fetchData((userData)=>{
    console.log("Recieved Data:",userData);
});
