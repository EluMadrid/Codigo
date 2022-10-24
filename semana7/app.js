import { Task } from "./task.js";


const inputTask = document.querySelector(".input__task");
const btnCreate= document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task");

const arrayTasks = [];

btnCreate.onclick = function (){
    const taskText = inputTask.value;
if (taskText === ""){
    alert("Debe completar el campo");
    return;
   
}
const task = new Task(taskText , new Date(), 1);
arrayTasks.push(task);

listTask.innerHTML += task.render();
inputTask.value = "";
};

