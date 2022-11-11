let task = document.getElementById("task");
let show = document.getElementById("show");
let container = document.getElementById("container")
let taskInput = document.getElementById("task-input");
let taskBtn = document.getElementById("task-btn");
let divAlert = document.getElementById("alert");
let taskList = [];
let modal = document.getElementById("modal");
let editInput = document.getElementById("edit-input");
let accomplished = document.getElementById("accomplished");


function saveTask() {
    show.style.display = "block";
    if (taskInput.value.trim() == 0) {
        divAlert.style.display = "block";
        divAlert.textContent = "O campo está vazio";
        setTimeout(function() {
            divAlert.style.display="none";
        }, 1500)
    } else if(taskList.find(value => value.name == taskInput.value)) {
        divAlert.style.display = "block";
        divAlert.textContent = "A tarefa digitada já existe";
        taskInput.value = '';
        setTimeout(function() {
            divAlert.style.display="none";
        }, 1500)
    } else { 
        divAlert.style.display = "none";
        let value = {
            "id": "#"+Math.floor(Date.now() * Math.random()).toString(36),
            "name": taskInput.value,
            "status": 1
        };

        taskList.push(value);
      
        taskInput.value = '';
        console.log(taskList);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    return taskList;

        
}
taskBtn.addEventListener("click", saveTask)
taskBtn.addEventListener("click", showTasks)
taskBtn.addEventListener("click", taskRealized)
taskBtn.addEventListener("click", deleteTask)


let divFlexs = document.getElementsByClassName("div-flex")

function showTasks() {
    for (i = 0; i < divFlexs.length; i++) {
        divFlexs[i].style.display = "none";
    }   
    taskList.forEach(task => {
        let list = document.createElement("input");
        let label = document.createElement("label");
        let div = document.createElement("div");
        let btnDel = document.createElement("i");
        let br = document.createElement("br");
        list.id = task.id;
        list.type = "checkbox";
        list.className = "check";
        div.className = "div-flex";
        show.style.display = "block";
        div.id = task.id;
        div.style.fontSize = "22px";
        list.name = task.id;
        label.className = "label";
        label.id = task.id;
        label.textContent = task.name;
        btnDel.id = task.id;
        btnDel.className = "fa fa-trash";
        container.appendChild(show)
        show.appendChild(div);
        div.appendChild(btnDel);
        div.appendChild(label);
        label.appendChild(list);

        div.appendChild(br);

        if (task.status == 2) {
            label.style.textDecoration = "line-through";
            label.style.color = "#ccc";
            list.checked = true;
        } else { 
            label.style.textDecoration = "none";
            label.style.color = "black";
        }
    })

}


let closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});



function taskRealized() { 

    let checks = document.querySelectorAll(".check");
    let labels = document.querySelectorAll(".label");
        for (let ch of checks) {
            ch.addEventListener("click", function () { 
                
                if (ch.checked) {
                    item = taskList.find(value => value.id == ch.id);
                    item.status = 2;
                    for (let lab of labels) {
                        if (lab.id == ch.name) {
                            lab.style.textDecoration = "line-through";
                            lab.style.color = "#ccc";
                            accomplished.style.display = "block";
                            accomplished.style.backgroundColor = "chartreuse";
                            accomplished.style.color = "black";
                            accomplished.textContent = `A tarefa "${item.name}" foi marcada como realizada!`;
                            setTimeout(function() {
                                accomplished.style.display="none";
                            }, 1500)
                            
                           

                        } 
                        
                    }
                } else {
                    item = taskList.find(value => value.id == ch.id);
                    item.status = 1;
                    for (let lab of labels) {
                        if (lab.id == ch.name) {
                            lab.style.textDecoration = "none";
                             lab.style.color = "black";
                             accomplished.style.display = "block";
                             accomplished.textContent = `A tarefa "${item.name}" foi desmarcada como realizada.`;
                             accomplished.style.backgroundColor = "blue";
                             accomplished.style.color = "white";
                             setTimeout(function() {
                                 accomplished.style.display="none";
                             }, 1500);
                            
                        }
                    }
                }
            console.log(item)
        
            });
        }    
}  


    

function deleteTask() {   
    let deletes = document.querySelectorAll(".fa.fa-trash");
        for (let del of deletes) {
            del.addEventListener("click", function() {
                item =  taskList.map(value => value.id).indexOf(del.id);
                taskList.splice(item, 1);
                showTasks();
                taskInput.value = "";
                taskBtn.click();
                divAlert.style.display = "none";
            });

        } 
        
}


