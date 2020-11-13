(function(){
    const Question = function(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(i=0; i<this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answer, callback){
        if(parseInt(answer) === this.correct){
            console.log('Correct Answer');
            sc = callback(true);
            
        } else {
            console.log('Wrong Answer! Try Again :');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score is ' + score);
        console.log('--------------------------------');
    }
    
    const q1 = new Question('What is Casweeney\'s surname?', ['Ojukwu', 'Okoye', 'Irabor'], 0);
    const q2 = new Question('How old is Casweeney?', ['24 years', '28 years', '30 years'], 1);
    const q3 = new Question('Who are Casweeney\'s friends?', ['Okiki, Daniel and Destiny', 'Lewy and Chokur', 'Malik, Andrew and Mr Sam'], 0);
    
    const questions = [q1, q2, q3];

    function score(){
        let sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    const keepScore = score();

    function nextQuestion(){
        const n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        const answer = prompt('Type the correct answer');

        if(answer !== 'exit'){
            questions[n].checkAnswer(answer, keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();