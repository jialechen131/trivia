import React, { Component } from 'react';
import Answer from "./Answer.jsx";
// import components


class Question extends Component {
  
  render() {
    return (
      <div>
      <h1>Question</h1>
       <Answer />
       <Answer />
       <Answer />
       <Answer />
        
      </div>
    );
  }
}

export default Question;