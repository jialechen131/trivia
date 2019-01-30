import React, { Component } from 'react';
// import components


class Answer extends Component {
  
  render() {
    return (
      <div>
       <button className="btn btn-primary">{this.props.answerText}</button>
      </div>
    );
  }
}

export default Answer;