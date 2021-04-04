"use strict";

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteTodo(event) {
  //console.dir(event.target);
  //console.log(event.target.parentNode);

  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(inputValue) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteTodo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  span.innerText = inputValue;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: inputValue,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function loadsTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedTODos = JSON.parse(loadedToDos);
    parsedTODos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadsTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
