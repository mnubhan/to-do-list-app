import { addTask } from "./addTask.js";
const inputBox = document.querySelector(".input-box");
inputBox.addEventListener("keyup", (e) => {
  e.key === "Enter" && inputBox.value !== "" ? addTask(inputBox.value,inputBox) : null;
});
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", () => {
  addTask(inputBox.value,inputBox);
});
