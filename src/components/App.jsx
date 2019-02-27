import React, { Component } from 'react';
import '../css/App.css';
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import ResetBtn from "./ResetBtn.jsx";
// import { Button } from 'react-bootstrap';
// import components
var question1 = {
    text: "Do you like dogs?",
    answers: ["yes", "no", "maybe"],
    correctAnswer: "yes"
};

var question2 = {
    text: 'what is 2+2?',
    answers: ["1", "2", "3", "4"],
    correctAnswer : "4"
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: question1.text,
            currentAnswers: question1.answers,
            correctAnswer: question1.correctAnswer
        };
    }

    render() {
        return (

            <div className="app">
         <Question
            className="questionOne"
            answers={this.state.currentAnswers} 
            questionText={this.state.currentQuestion}   
            correctAnswer={this.state.correctAnswer}
         />
      </div>
        );
    }
}

export default App;
