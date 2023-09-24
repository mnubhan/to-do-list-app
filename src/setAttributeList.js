export function setAttributeList(element, props){
    Object.entries(props).forEach(([key, value]) => {
      element.setAttributeNS(null, key, value);
    });
  };