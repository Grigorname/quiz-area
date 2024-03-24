<<<<<<< HEAD
 export const valueSetter = (selector,value) => {
 document.querySelector(selector).innerHTML = value;
}


export const tagCreator = (tagName,parent,value,index = '') => {
   const tag = document.createElement(tagName);
   tag.dataset.option = index;
   parent.appendChild(tag);
   tag.innerHTML=value;
}
=======
export const valueSetter = (selector, value) => {
    document.querySelector(selector).innerHTML = value;
}

export const tagCreator = (tagName, parent, value, index = '') => {
    const tag = document.createElement(tagName);
    tag.dataset.option = index;
    parent.appendChild(tag);
    tag.innerHTML = value;
}


>>>>>>> f9eeab2ec844859f8b6139b0a2fe05d83ab50a85
