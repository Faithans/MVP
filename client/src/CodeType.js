import React, {useState} from "react";
// import compare from '../../database/model/compare.js'

export default function CodeType({answer, setStepIdx, stepIdx}) {

  const [currentCode, setCurrentCode] = useState('');


  const codeCompare = () => {
    // compare(currentCode, answer)
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch(err => console.error(err))

    if(JSON.stringify(currentCode) === JSON.stringify(answer[stepIdx])){
      console.log(`it's correct!`)
      setStepIdx(stepIdx + 1);
      setCurrentCode('');
    } else {
      console.log(`nah`)
    }
  }

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('typeArea').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "userCode.js";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setCurrentCode(e.target.value);
  }
  return (
    <form>
        <textarea
          className='typeArea'
          value={currentCode}
          onChange={handleChange}
          id='typeArea'
        />
        <input type="button" value="Submit Code" className="submitButton"
        onClick={downloadTxtFile}
        ></input>

        <input type="button" value="Submit Code" className="submitButton"
        onClick={codeCompare}
        ></input>
    </form>

  );
}

