var todoList = document.getElementById("list");

function addTodo(){
    var todoItem = document.getElementById("todo_item");
   
    // create li tag with text node
    var li = document.createElement('li');
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);

    // create delete button
    var deleteButton = document.createElement("button");
    var deleteText = document.createTextNode("Delete");
    deleteButton.setAttribute("class", "btn");
    deleteButton.setAttribute("onclick", "deleteItem(this)");
    deleteButton.appendChild(deleteText);
     
    // create edit button
    var editButton = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editButton.setAttribute("class", "btn");
    editButton.setAttribute("onclick", "editItem(this)");
    editButton.appendChild(editText);


    li.appendChild(deleteButton);
    li.appendChild(editButton);
    todoList.appendChild(li);
    todoItem.value = "";
}

function deleteItem(dlt){
    dlt.parentNode.remove();
}

function editItem(edit){
    var value = edit.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter the edit value " , value);
    edit.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll(){
    list.innerHTML = "";
}