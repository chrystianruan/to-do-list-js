let task = document.getElementById("task");
let show = document.getElementById("show");
let taskInput = document.getElementById("task-input");
let taskBtn = document.getElementById("task-btn");
let alert = document.getElementById("alert");
var taskList = [];
var arroz = document.getElementById("arroz");
let mostra = document.getElementById("mostra");
let accomplished = document.getElementById("accomplished");


taskBtn.addEventListener("click", function() {
    show.style.display = "block";
    if (taskInput.value == "") {
        alert.style.display = "block";
        alert.textContent = "O campo está vazio";
        setTimeout(function() {
            alert.style.display="none";
        }, 1500)
    } else if(taskList.indexOf(taskInput.value) != -1) {
        alert.style.display = "block";
        alert.textContent = "A tarefa digitada já existe";
        taskInput.value = '';
        setTimeout(function() {
            alert.style.display="none";
        }, 1500)
    } else { 
        alert.style.display = "none";
        taskList.push(taskInput.value);
        let list = document.createElement("input");
        let label = document.createElement("label");
        let div = document.createElement("div");
        let btnEdit = document.createElement("i");
        let btnDel = document.createElement("i");
        let br = document.createElement("br");
        list.id = taskList.indexOf(taskInput.value);
        list.type = "checkbox";
        list.className = "check";
        div.className = "div-flex";
        div.id = taskInput.value;
        div.style.fontSize = "22px";
        list.name = taskInput.value;
        label.className = "label";
        label.id = taskInput.value;
        label.textContent = taskInput.value;
        btnEdit.id = taskInput.value;
        btnDel.id = taskInput.value;
        btnEdit.className = "fa fa-pencil";
        btnDel.className = "fa fa-trash";
        show.appendChild(div);
        div.appendChild(btnEdit);
        div.appendChild(btnDel);
        div.appendChild(label);
        label.appendChild(list);
    
        div.appendChild(br);

        let checks = document.querySelectorAll(".check");
        let labels = document.querySelectorAll(".label");
        let deletes = document.querySelectorAll(".fa.fa-trash");
        let edits = document.querySelectorAll(".fa.fa-pencil");
        let divs = document.querySelectorAll(".div-flex");

        for (let ch of checks) {
            ch.addEventListener("click", function () { 
                if (ch.checked) {
                    
                        for (let lab of labels) {
                            if (lab.id == ch.name) {
                                lab.style.textDecoration = "line-through";
                                lab.style.color = "#ccc";
                                accomplished.style.display = "block";
                                accomplished.style.backgroundColor = "chartreuse";
                                accomplished.style.color = "black";
                                accomplished.textContent = `A tarefa "${lab.id}" foi marcada como realizada!`;
                                setTimeout(function() {
                                    accomplished.style.display="none";
                                }, 1500)
                            } 
                        
                    }
                } else {
                    for (let lab of labels) {
                        if (lab.id == ch.name) {
                            lab.style.textDecoration = "none";
                             lab.style.color = "black";
                             accomplished.style.display = "block";
                             accomplished.textContent = `A tarefa "${lab.id}" foi desmarcada como realizada.`;
                             accomplished.style.backgroundColor = "blue";
                             accomplished.style.color = "white";
                             setTimeout(function() {
                                 accomplished.style.display="none";
                             }, 1500);
                            
                        }
                    }
                }
            console.log(ch.name)
        
            });
        }  
         
        for (let i = 0; i < deletes.length; i++) {
            deletes[i].addEventListener("click", function() {
                for (let j = 0; j < divs.length; j++) {
                    if (deletes[i].id == divs[j].id) {
                        divs[j].style.display = "none";
                        taskList.splice(divs[j], 1)
                    }
                }
            });

        }

        taskInput.value = '';
       
    }
    console.log(taskList);

   

}); 



