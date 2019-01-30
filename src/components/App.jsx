import React, { Component } from 'react';
import '../css/App.css';
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import ResetBtn from "./ResetBtn.jsx";
// import { Button } from 'react-bootstrap';
// import components
var question1Answers = ["yes","no","maybe" ];
var question2Answers = ["1","2","2.5","4" ];

class App extends Component {

  render() {
    return (
      
      <div className="app">
        
         <Question
            className="questionOne"
            answers={question1Answers}
            questionText={"Do you like dogs?"}
            
         />
       <Question 
       className ="questionTwo"
        questionText={"what is 2+2?"}
        answers={question2Answers}
       
       />
         <ResetBtn />
         
      </div>
    );
  }
}

export default App;