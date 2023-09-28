import { setAttributeList } from "./setAttributeList.js";
export function unFinishTask(e) {
  const icon = e.target;
  const task = e.target.nextSibling;
  const rightIcon = e.target.lastChild;
  setAttributeList(icon, {
    class: "icon-uncheck",
  });
  rightIcon.remove();
  task.setAttribute("style", "text-decoration:none");
}
