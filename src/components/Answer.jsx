import React, { Component } from 'react';
// import components


class Answer extends Component {
  
  render() {
    return (
      <div>
       <button onClick={() => {
         this.props.onClick(this.props.answerText);
         
       }} className="btn btn-primary">{
       this.props.answerText}</button>
      </div>
    );
  }
}

export default Answer;