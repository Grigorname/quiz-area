import { text, defaultLanguage } from './constnats.js';


const language = 'hy';


const warningElement = document.getElementById('warning');
const warrningText = text[language].warrningText;

let i = 0;
let typeWriter = () =>{
    if(i < warrningText.length){
      document.getElementById('warning').innerHTML +=warrningText.charAt(i);
      i++
    }

    setTimeout(setTimeout(typeWriter, 110))
}
setTimeout(typeWriter,500)