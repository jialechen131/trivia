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
    onAnswerClick = (answerText)=> {
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
    
    onNextQuestion = () => { 
      this.props.goToNextQuestion();
      this.resetQuestion();
    }
    
    resetQuestion = () => { 
        this.setState({
            answer: "",
            gotItRight: undefined
        });
    }
    
    render() {
        var answers;
        var userPickedAnswer = this.state.gotItRight !== undefined;
        
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
                        disabled ={userPickedAnswer}
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
                    {userPickedAnswer && (
                    <div>
                        <div className={this.state.gotItRight != true?"incorrect":"correct"}>You got it  
                            {this.state.gotItRight === true
                            ?" right!"
                            :" wrong!"
                            }
                        </div>
                         <button onClick={this.onNextQuestion} className="btn btn-primary">Go to Question {this.props.currentQuestionNum +1} </button>
                    </div>
                    )}
                   
            </div>
        );
    }
}

 
export default Question;

// ternary operator