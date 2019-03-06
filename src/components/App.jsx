import React, { Component } from 'react';
import '../css/App.css';
import Question from "./Question.jsx";
import { Button } from 'react-bootstrap';
import Answer from "./Answer.jsx";
import ResetBtn from "./ResetBtn.jsx";
// import { Button } from 'react-bootstrap';
// import components
var question1 = {
    text: "Is 1 + 1 = 2?",
    answers: ["yes", "no", "maybe"],
    correctAnswer: "yes"
};

var question2 = {
    text: 'what is 2+2?',
    answers: ["1", "2", "3", "4"],
    correctAnswer: "4"
};

var questions = [question1, question2];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionNum: 1
        };
    }

    goToNextQuestion = () => {
        this.setState({
            currentQuestionNum: this.state.currentQuestionNum + 1
        });
        console.log("clicked!!!!");
    }



    render() {
        var currentQuestionIndex = this.state.currentQuestionNum - 1;
        var currentQuestion = questions[currentQuestionIndex] || {};
        var currentQuestionObj = {
            text: currentQuestion.text,
            answers: currentQuestion.answers,
            correctAnswer: currentQuestion.correctAnswer
        };
        return (

            <div className="app">
        {Object.keys(currentQuestion).length > 0
            ? (
            <Question
                className="questionOne"
                answers={currentQuestionObj.answers} 
                questionText={currentQuestionObj.text}   
                correctAnswer={currentQuestionObj.correctAnswer}
                goToNextQuestion={this.goToNextQuestion}
                currentQuestionNum={this.state.currentQuestionNum}
            />
            )
            :" wrong!"
            }
      </div>
        );
    }
}

export default App;
