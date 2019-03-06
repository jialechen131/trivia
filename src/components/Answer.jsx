import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import components


class Answer extends Component {
  
  render() {
    return (
      <div>
      
       <button
            onClick={() => {
            this.props.onClick(this.props.answerText);
         
            }}
            className="btn btn-primary"
            disabled = {this.props.disabled}
            
            >{
       this.props.answerText}</button>
      </div>
    );
  }
}

export default Answer;