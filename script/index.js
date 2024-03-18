import { defaultLanguage, translates } from './constnats.js';
import { valueSetter, tagCreator } from './helpers.js';
import { questions } from './db.js'; //harcer

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



// quiz code area

const quizGenerator = (quizList) => {
    let quizStep = 0;
    const question = quizList[quizStep];//mek harcy
    console.log(question);
    return () => {
        valueSetter('#quiz_title', question.quizTitle);
        valueSetter('#helpers', question.quiz);

        question.options.forEach((quiz) => {
            tagCreator('li', document.getElementById('quiz_options'), quiz)
        });
    }
};

const quizConfig =  quizGenerator(questions); //quiz 1 berec

quizConfig();
