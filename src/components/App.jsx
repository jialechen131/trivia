import React, { Component } from 'react';
import '../css/App.css';
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import ResetBtn from "./ResetBtn.jsx";
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        
         <Question />
         <ResetBtn />
      </div>
    );
  }
}

export default App;