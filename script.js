let task = document.getElementById("task");
let show = document.getElementById("show");
let taskInput = document.getElementById("task-input");
let taskBtn = document.getElementById("task-btn");
let alert = document.getElementById("alert");
var taskList = [];
var arroz = document.getElementById("arroz");
let mostra = document.getElementById("mostra");



taskBtn.addEventListener("click", function() {
    show.style.display = "block";
    if (taskInput.value == "") {
        alert.style.display = "block";
        alert.textContent = "O campo está vazio";
    } else if(taskList.indexOf(taskInput.value) != -1) {
        alert.style.display = "block";
        alert.textContent = "A tarefa digitada já existe";
        taskInput.value = '';
    } else { 
        alert.style.display = "none";
        taskList.push(taskInput.value);
        let list = document.createElement("input");
        let label = document.createElement("label");
        let br = document.createElement("br");
        list.id = taskList.indexOf(taskInput.value);
        list.type = "checkbox";
        list.className = "check";
        list.name = taskInput.value;
        label.className = "label";
        label.id = taskInput.value;
        label.textContent = taskInput.value;
        arroz.appendChild(list);
        arroz.appendChild(label);
        arroz.appendChild(br);
        let checks = document.querySelectorAll(".check");
        let labels = document.querySelectorAll(".label");
        for (let ch of checks) {
            ch.addEventListener("click", function () { 
                if (ch.checked) {
                    if (taskList.indexOf(ch.name) != -1) {
                        for (let lab of labels) {
                            if (lab.id == ch.name) {
                                lab.style.textDecoration = "line-through";
                            }
                        }
                    }
                } else {
                    for (let lab of labels) {
                        if (lab.id == ch.name) {
                            lab.style.textDecoration = "none";
                        }
                    }
                }
            console.log(ch.name)
        
            });
        }  

        taskInput.value = '';
       
    }
    console.log(taskList);

   

}); 



