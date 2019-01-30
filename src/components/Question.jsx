import React, { Component } from 'react';
import Answer from "./Answer.jsx";
// import components


class Question extends Component {

    render() {
        var answers;
        
        if (this.props.answers){
            answers = this.props.answers
            .map(
                answerText=> (
                    <Answer answerText={answerText} />
                ) 
       
            )
            
        }

        return (


     <div >
     
      <h1 className = {this.props.className + " title"} >
        {this.props.questionText}
      </h1>
      {answers}
    
      </div>
        );
    }
}

export default Question;
