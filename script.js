var globalvar = "this is global scoped";

function funcvar(){
    var funcvar = "this is block scoped";
    if (true){
        var blockvar = " i am block scoped ";
        console.log(blockvar);
    }
    console.log(funcvar);

}
console.log(globalvar);
console.log(funcvar);


/* there are three typr of functions */

function sayhi(name){ /* Traditional function declaration */
    console.log(`"Hi",${name}`);
}

var addition = function(a,b){ /* function expression */
    console.log(a+b);
};

addition(12,3);

/* Arrow function */

var sayji = ()=>{
    console.log("This is arrow function.");
}

sayji();
sayhi("This is traditional function");


const person = {
    name: "alice",
    greet: function(){
        return `Hello, My name is ${this.name}`
    }
};
console.log(person.greet);


function Students(){
    let Studentlist = document.querySelector(".student-list");
    const addItembtn = document.getElementById("add-item");
    const removeItembtn = document.querySelector(".remove-item");
    const replaceItembtn = document.querySelector(".replace-item");

    addItembtn.addEventListener("click",addbtn());

    let addbtn = function(){
        let getitem = prompt("Enter item to add:");
        const newitem = document.createElement('li');
        newitem.textContent = getitem;
        Studentlist.appendChild(newitem);
    }

}

Students();

