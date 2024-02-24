const button=document.getElementById("button");
const input=document.getElementById("input");
const list=document.getElementById("todolist");

let store=[]
button.onclick=click

function click(){
    store.push(input.value)
    input.value=''
    showtodo()
}
console.log(store);

function showtodo(){
    // list.innerHTML+=
    store.forEach((todo,index) => {
        list.innerHTML +=
        "<li>"
            +todo+
            "<a onclick='edithandle("+index+")'>EditTodo</a>"+
            "<a onclick='deletehandle("+index+")'>&times</a>"+
        "</li>"
    }) 
}

function edithandle(index){
    let newvalue=prompt("Enter new Todo")
    if (newvalue.length!=0){
    store.splice(index,1,newvalue)
    showtodo()}
}

function deletehandle(index){
    store.splice(index,1)
    showtodo()
}