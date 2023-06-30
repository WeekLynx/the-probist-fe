import React from 'react';


class Chatroom extends React.Component {
  render() {
    const { questions } = this.props;

    return (
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Chatroom;
