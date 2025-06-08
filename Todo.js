const addBtn = document.getElementById("addbtn");
const toDoInput = document.getElementById("todo-input");
const toDoItems = document.getElementById("todo-items")
const delAll=document.getElementById("del-all");

addBtn.addEventListener("click",()=>{
    const value=toDoInput.value.trim();
    console.log(value)
    const li = document.createElement("li") //created a li tag
    const delBtn=document.createElement("button");
    delBtn.innerText="❌"
    delBtn.addEventListener("click",()=>{
        li.remove();
    })
    li.innerText=value;
    li.appendChild(delBtn)
    toDoItems.appendChild(li);
    
    toDoInput.value=" "
})

delAll.addEventListener('click',function(){
    toDoItems.innerHTML=" ";
    
})
