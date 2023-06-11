// Selecting elements
var taskInput = document.getElementById("task-input");
var addBtn = document.getElementById("add-btn");
var taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  var task = taskInput.value;
  
  if (task !== "") {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var taskText = document.createTextNode(task);
    
    li.appendChild(checkbox);
    li.appendChild(taskText);
    taskList.appendChild(li);
    
    taskInput.value = "";
  }
}

// Event listener for the add button
addBtn.addEventListener("click", addTask);