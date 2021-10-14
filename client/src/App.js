import React, { useState } from "react";
import CodeType from './CodeType.js';

const App = () => {
  const [stepIdx, setStepIdx] = useState(0);

  const stepPromt = [
    'Please create a Binary Tree Search with Insert, Contain and Depth First Log function',
    'Please create a Graph',
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
        <h1> Your Last Miniute Data Structure Reviewer!</h1>
        <div className='prompt'>
          {stepPromt[stepIdx]}
        </div>
        <CodeType
        stepIdx={stepIdx}
        setStepIdx={setStepIdx}
        />
      </div>
    </div>
  );
}

export default App;
