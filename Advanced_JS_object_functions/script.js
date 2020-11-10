// function constructor
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

// object.create
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