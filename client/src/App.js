import React, { useState } from "react";
import CodeType from './CodeType.js';
import {answerCode} from './answer.js';

const App = () => {
  const [stepIdx, setStepIdx] = useState(0);

  const stepPromt = [
    'We will need a Node class first',
    'Well done! Now we will need a BinarySearchTree class',
    `Let's started created the helper function, insert(data) & insertNode(node, newNode)`,
    `It's time for the remove function! create remove(data) & removeNode(node, newNode)`,
    'Well done! Try another data structure!'
  ]

  const showPrompt = (stepIdx) => {
    if (stepIdx === stepPromt.length) {
      setStepIdx(0);
    } else {
      setStepIdx(stepIdx + 1);
    }
  }

  return (
    <div className="App">
      <div className='card'>
        <h1> Please create a binary tree in ES6 </h1>
        <div>
          {stepPromt[stepIdx]}
        </div>
        <CodeType
        answer={answerCode.answer}
        stepIdx={stepIdx}
        setStepIdx={setStepIdx}
        />
      </div>
    </div>
  );
}

export default App;
