import React, { Component } from 'react';
import '../css/App.css';
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import ResetBtn from "./ResetBtn.jsx";
// import { Button } from 'react-bootstrap';
// import components
var question1 = {
    text: "Do you like dogs?",
    answers:  ["yes","no","maybe" ],
};

var question2 = {
    text: 'what is 2+2?',
    answers: ["1","2","2.5","4" ]
};


class App extends Component {
    state = {
        currentQuestion:question1.text, 
        currentAnswers: question1.answers
    }
    
    onAnswerClick() { 
        console.log("answers click");
    } 

  render() {
    return (
    
      <div className="app">
         <Question
            className="questionOne"
            answers={this.state.currentAnswers} 
            questionText={this.state.currentQuestion}
            onAnswerClick={this.onAnswerClick}
         />
      </div>
    );
  }
}

export default App;