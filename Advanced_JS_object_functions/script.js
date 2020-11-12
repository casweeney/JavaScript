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
// Closure Challenge: Write the InterviewQuestion Function below using the power of closure
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
function interviewQuestion(job){
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

interviewQuestion('developer')('Casweeney');
