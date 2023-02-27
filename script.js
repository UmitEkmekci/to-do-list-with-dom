// Todo Add Item

// Eleman Secimi

const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

addEventListener();

function addEventListener(){
    // submit event
    form.addEventListener("submit",addnewItems);
    // delete an item
    taskList.addEventListener("click",deleteItem);
    // delete all item
    btnDeleteAll.addEventListener("click",deleteAllItems);

};

function addnewItems(e){

    if(input.value === ''){
        alert("add new item.");
        console.log("add new item.");
    }
    else {
        console.log("submit");

    }

    // li olusturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    // a olusturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(a);
    taskList.appendChild(li);
    input.value = "";

    e.preventDefault();

};

// Eleman Silme

function deleteItem(e){
    if(confirm("Are you sure about the delete of item?")){
        if(e.target.className === "fas fa-times"){
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
};

// Tüm Elemanları Silme

function deleteAllItems(e){
    // taskList.innerHTML="";


    if(confirm("Are you sure about the delete of all items?")){
        taskList.childNodes.forEach(function(item){
            if(item.nodeType === 1){
                item.remove();
            }
        })
    };
};




