import { addElements } from "./addElement.js";
import { setAttributeList } from "./setAttributeList.js";
import { removeTask } from "./removeTask.js";
import { finishTask } from "./finishTask.js";
import { unFinishTask } from "./unFinishTask.js";
export function addTask(task, inputBoxElement) {
  // create a new p element
  let taskName = document.createElement("p");
  taskName.classList.add("task-name");
  // insert the input value into the p element
  taskName.innerText = task;
  inputBoxElement.value = "";
  /* 
  create a new svg element by using DOM createElementNS() method
  -createElementNS() is used to create an element with a specified namespace
  -namespace is a labeling system in coding
  -the namespace for svg is http://www.w3.org/2000/svg
  */
  let iconUncheckPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  setAttributeList(iconUncheckPath, {
    d: "M12,2C6.486,2,2,6.486,2,12c0.001,5.515,4.487,10.001,10,10.001c5.514,0,10-4.486,10.001-10.001 C22.001,6.486,17.515,2,12,2z M12,20.001c-4.41,0-7.999-3.589-8-8.001c0-4.411,3.589-8,8-8c4.412,0,8.001,3.589,8.001,8 C20,16.412,16.411,20.001,12,20.001z",
  });

  let iconUncheck = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  setAttributeList(iconUncheck, {
    class: "icon-uncheck",
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    viewBox: "0 0 24 24",
    height: "2em",
    width: "2em",
  });
  addElements([iconUncheckPath], iconUncheck);
  let iconClosedPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  setAttributeList(iconClosedPath, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  });
  let iconClosed = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  setAttributeList(iconClosed, {
    class: "icon-remove-task",
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    viewBox: "0 0 24 24",
    height: "100%",
    width: "2em",
  });
  addElements([iconClosedPath], iconClosed);
  let newList = document.createElement("li");
  addElements([iconUncheck, taskName, iconClosed], newList);
  let listContainer = document.querySelector(".list-container");
  addElements([newList], listContainer);
  iconClosed.addEventListener("click", removeTask);
  iconClosed.addEventListener("touchstart", removeTask);
  iconUncheck.addEventListener("click", (e) =>
    e.target.matches(".icon-uncheck") ? finishTask(e) : unFinishTask(e)
  );
}
