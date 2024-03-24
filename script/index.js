import { defaultLanguage, translates } from './constnats.js';
import {valueSetter,tagCreator } from './helpers.js';
import { questions } from './db.js';
const speed = 50; 
let i = 0;

const typeWriter = () => {
    const warningText = translates[defaultLanguage].warningText;
    const warningContainer = document.getElementById('warning');
    
    if (i < warningText.length) { //64;
        warningContainer.innerHTML+=  warningText[i];  
        i++;
        setTimeout(typeWriter, speed);
    } else {
        warningContainer.style.display = 'none'
        document.getElementById('quizSection').style.transform = 'translate(0,50px)';
    }

};

typeWriter();

// quiz code area

// function nextStep() {
    
// }

const quizGenerator = (quizList) => {
 let quizStep = 0;

 const quizCount = quizList.length;
 let correctAnswer = 0;
 let percent = 0;
 const ulContainer = document.getElementById('quiz_options');
 const nextStep = () => {
    tagCreator('ul',document.getElementById('ulContainer'), 'value')
     const questions= quizList[quizStep];
     quizStep++
     console.log(questions);
   
    console.log(quizStep);
     valueSetter('#quiz_title',questions.quizTitle);
    valueSetter('#helpers', questions.quiz);
    ulContainer.innerHTML = ''; 
    questions.options.forEach ((quiz,index) => {
        tagCreator('li',ulContainer ,quiz,index)
    });
    ulContainer.addEventListener('click', (e) => {
 
  if (e.target.tagName === 'LI') {
      if (e.target.dataset.options == questions. correctOption) {
     correctAnswer++
      }
    if(quizCount > quizStep) {

        nextStep();

    }

    
  
    
  } 
})

 }
 return nextStep;
}

const quizConfing = quizGenerator(questions)

quizConfing()

console.log();