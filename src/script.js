import { createList } from "./addList";
function addList(){
  let task = document.querySelector(".input-box").value;
  createList(task);
}
addList();
