import { addElements } from "./addElement.js";
import { setAttributeList } from "./setAttributeList.js";
export function createList(task) {
  let taskName = document.createElement("p");
  taskName.innerHTML = task;
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
    d: "M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z",
  });
  let iconClosed = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  setAttributeList(iconClosed, {
    class: "icon-closed",
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
  });
  addElements([iconClosedPath], iconClosed);
  let newList = document.createElement("li");
  addElements([iconUncheck, taskName, iconClosed], newList);
  let listContainer = document.querySelector(".list-container");
  addElements([newList], listContainer);
}
