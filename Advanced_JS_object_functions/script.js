//////////////////////////////////////
// Lecture: Function Constructor
/* var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}

var john = new Person('john', 1992, 'teacher');

john.calculateAge(); */


////////////////////////////////////////
// Lecture: Object.create
/* var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

// Example 1
var john = Object.create(personProto);
john.name = "John Doe";
john.yearOfBirth = 1992;
john.job = "teacher";

// Example 2
var jane = Object.create(personProto, {
    name: { value: "Jane Harris" },
    yearOfBirth: { value: 1994 },
    job: { value: "fashion designer" }
}); */


//////////////////////////////////////////
//Lecture: Functions
// First Class Functions passing functions as arguments
/* var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn){
    var arrRes = [];
    for(i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates); */


////////////////////////////////////
// Functions returning functions
/* function interviewQuestion(job){
    if(job === 'designer'){
        return function(name) {
            var questions = [
                'can you please explain what UX design is?', 
                'What are the elements of design?',
                'Can you design an idea from scratch?',
            ]

            for(var i = 0; i < questions.length; i++){
                console.log(name + ' ' + questions[i]);
            }
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Casweeney');

interviewQuestion('teacher')('Daniel'); */


////////////////////////////////////////////////
// Lecture: IIFE - Immediately Invoked Function Expression
// 1. Regular Function
/* function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game(); */

// 2. IIFE
/* (function() {
        var score = Math.random() * 10;
        console.log(score >= 5);
})(); */



// Lecture: Closures
/* function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1992);
retirementGermany(1992);
retirementIceland(1992); */


/////////////////////////////////////
// Closure Challenge: Write the InterviewQuestion Function below using the power of Closure
/* function interviewQuestion(job){
    if(job === 'designer'){
        return function(name) {
            console.log(name + ' can you please explain what UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
} */

// Challenge Solution
/* function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ' can you please explain what UX design is?');
        } else if (job === 'teacher'){
            console.log('What subject do you teach ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('developer')('Casweeney'); */


///////////////////////////////////
// Lecture: Bind, call and apply
/* var john = {
    name: 'John',
    age: 30,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ' Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly'){
            console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'emily',
    age: 28,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); // Using method borrowing
//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly'); // Carrying

johnFriendly('afternoon');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning'); */

////////////////////////////////
// Using bind() method
/* var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn){
    var arrRes = [];
    for(i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan); */

////////////////////////
// Build a fun quiz game:

// Step 7: Make the code private
/* (function(){
    //Step 1
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    //Step 3
    Question.prototype.displayQuestion = function(){
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    // Step 6
    Question.prototype.checkAnswer = function(ans){
        if(ans === this.correct){
            console.log('Correct Answer');
        } else {
            console.log('Wrong Answer! Try Again :');
        }
    }

    //Step 2
    const q1 = new Question('Which programming language is the best?', ['JavaScript', 'PHP', 'Python', 'Java'], 0);
    const q2 = new Question('What is the first language of the web?', ['HTML', 'CSS', 'JavaScript'], 0);
    const q3 = new Question('What gives websites a beautiful presentation?', ['JavaScript', 'CSS', 'JavaScript', 'Bootstrap'], 1);

    //Step 3
    const questions = [q1,q2,q3];

    // Step 4
    const n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    // Step 5
    const answer = parseInt(prompt('Please select the correct answer.'));

    // Step 6 continues
    questions[n].checkAnswer(answer);
})(); */


(function(){
    
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    
    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
        if(ans === this.correct){
            console.log('Correct Answer');
            sc = callback(true);
        } else {
            console.log('Wrong Answer! Try Again :');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score);
        console.log('---------------------------');
    }

    
    const q1 = new Question('Which programming language is the best?', ['JavaScript', 'PHP', 'Python', 'Java'], 0);
    const q2 = new Question('What is the first language of the web?', ['HTML', 'CSS', 'JavaScript'], 0);
    const q3 = new Question('What gives websites a beautiful presentation?', ['JavaScript', 'CSS', 'JavaScript', 'Bootstrap'], 1);

    const questions = [q1,q2,q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();
    
    function nextQuestion(){
        const n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        
        const answer = prompt('Please select the correct answer.');

        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();



