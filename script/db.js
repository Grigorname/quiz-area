const questions = [
    {
        quizTitle: 'Ի՞նչ կտպվի console-ում',
        quiz: 'console.log(Hello World)',
        options: [
            'world',
            'Hello World',
            'hello',
            'World Hello'
        ],
        correctOption: 1
    },
    {
        quizTitle: 'Ի՞նչ կտպվի console-ում',
        quiz: 'console.log(Hello World)',
        options: [
            'world',
            'Hello World',
            'hello',
            'World Hello'
        ],
        correctOption: 1
    },
    {
        quizTitle: 'Ի՞նչ կտպվի console-ում',
        quiz: 'console.log(Hello World)',
        options: [
            'world',
            'Hello World',
            'hello',
            'World Hello'
        ],
        correctOption: 1
    },
]

const question = 1;
const selectedOption = 3 // World Hello
let potin = 0;
if (selectedOption === questions[question].correctOption) {
    potin++
}