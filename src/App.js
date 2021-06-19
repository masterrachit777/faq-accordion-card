import React, {useState} from 'react'
import Image from './components/Image'
import questions from './questions'
import ListQues from './components/ListQues'

function App() {

  function createList(question){
    return(
      <ListQues key={question.id} ques={question.ques} ans={question.ans} />
    );
  }

  return (
    <>
    <img 
      className="box" 
      src="images/illustration-box-desktop.svg" alt="box"/>
    <div className="container">
      <Image />
      <div className="questions">
        <h1>FAQ</h1>
        <ul>
          {questions.map(createList)}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
