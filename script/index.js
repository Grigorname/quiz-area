import { defaultLanguage, translates } from './constnats.js';
<<<<<<< HEAD
import {valueSetter,tagCreator } from './helpers.js';
import { questions } from './db.js';
const speed = 50; 
=======
import { valueSetter, tagCreator } from './helpers.js';
import { questions } from './db.js'; 

const speed = 50;
>>>>>>> f9eeab2ec844859f8b6139b0a2fe05d83ab50a85
let i = 0;


const typeWriter = () => {
    const warningText = translates[defaultLanguage].warningText;
    const warningContainer = document.getElementById('warning');
    
    if (i < warningText.length) { //64;
        warningContainer.innerHTML+=  warningText[i];  
        i++;
        setTimeout(typeWriter, speed);
    } else {
<<<<<<< HEAD
        warningContainer.style.display = 'none'
        document.getElementById('quizSection').style.transform = 'translate(0,50px)';
=======
        warningContainer.style.display = 'none';
        document.getElementById('quizSection').style.transform = 'translate(0, 50px)';

>>>>>>> f9eeab2ec844859f8b6139b0a2fe05d83ab50a85
    }

};


typeWriter();

// quiz code area

<<<<<<< HEAD
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
=======

// quiz code area

const quizGenerator = (quizList) => {
    let quizStep = 0; //step
    
    console.log(quizStep, 'top');
    const quizCount = quizList.length;
    let correctAnswer = 0;
    let percent = 0;
    const ulContainer = document.getElementById('quiz_options');

    const nextStep = (position) => {
        if (position === 'next' && quizStep < quizCount) {
            quizStep++;
        } else if (position === 'prev' && quizStep > 0) {
            quizStep--;
        }
        const question = quizList[quizStep];  //0[0]
        // 

        console.log(quizStep, 'quizStep');
        
        ulContainer.innerText = '';

        valueSetter('#quiz_title', question.quizTitle);
        valueSetter('#helpers', question.quiz);

   
        question.options.forEach((quiz, index) => {
            tagCreator('li', ulContainer, quiz, index)
        });


        ulContainer.addEventListener('click', (e)=> {
            if (e.target.tagName === 'LI') {  
                if (e.target.dataset.option == question.correctOption) {
                    correctAnswer++;
                }
            } 
        });
    }

    return nextStep;
};

const quizConfig =  quizGenerator(questions); //quiz 1 berec

quizConfig();

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', () => {
    quizConfig('prev');
})

next.addEventListener('click', () => {
    quizConfig('next');
})


// console.log(document.querySelectorAll('.button_conatiner > button'))



>>>>>>> f9eeab2ec844859f8b6139b0a2fe05d83ab50a85
