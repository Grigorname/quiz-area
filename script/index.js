import { defaultLanguage, translates } from './constnats.js';

const speed = 50;
let i = 0;

const typeWriter = () => {
    const warningText = translates[defaultLanguage].warningText;
    const warningContainer = document.getElementById('warning');
    
    if (i < warningText.length) { //64;
        warningContainer.innerHTML+=  warningText[i];  
        i++;
        setTimeout(typeWriter, speed);
    }

};

typeWriter();








// 65 =A
// 
// 122 / z 
// console.log('a' === 'A');


// let i = 0;
// let typeWriter = () =>{
//     if(i < warrningText.length){
//       document.getElementById('warning').innerHTML +=warrningText.charAt(i);
//       i++
//     }

//     setTimeout(setTimeout(typeWriter, 110))
// }
// setTimeout(typeWriter,500)