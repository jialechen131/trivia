import React, { Component } from 'react';
import Answer from "./Answer.jsx";
// import components


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer : "" 
        };
    }
    onAnswerClick(answerText){
        console.log("click",answerText);
        
        console.log("Is the right?: ", answerText == this.props.correctAnswer);
    }
    render() {
        var answers;
        if (this.props.answers){
            answers = this.props.answers
            .map(
                answerText => (
                    <Answer
                        answerText={answerText}
                        onClick={(answerText) => {
                            console.log(answerText);
                            this.onAnswerClick(answerText);
                        }}
                    />
                ) 
            );
        }
    
        return (
            <div>
                <h1 className = {this.props.className + " title"}>
                    {this.props.questionText}
                </h1>
                {answers}
            </div>
        );
    }
}
  


export default Question;
