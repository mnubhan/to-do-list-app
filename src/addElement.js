export function addElements (elements, parent){
    elements.forEach((element) => {
      parent.appendChild(element);
    });
  };