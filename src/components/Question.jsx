import React, { Component } from 'react';
import Answer from "./Answer.jsx";
// import components


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            gotItRight: undefined
        };
    }
    onAnswerClick(answerText) {
        var gotItRight = answerText === this.props.correctAnswer;
        console.log("click", answerText);

        console.log("Is the right?: ", answerText === this.props.correctAnswer);
        this.setState({
            gotItRight: gotItRight
        });
        // if (gotItRight == true) {
        //     alert("you got it right!")

        // }
        // else {
        //     alert("you got it wrong!")
        // }
    }
    render() {
        var answers;
    
        
        if (this.props.answers) {
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
                    {this.state.gotItRight !== undefined && (
                        <div className={this.state.gotItRight != true?"incorrect":"correct"}>You got it  
                            {this.state.gotItRight === true
                            ?" right!"
                            :" wrong!"}
                 
                        </div>
                    )}
                   
            </div>
        );
    }
}

 
export default Question;

