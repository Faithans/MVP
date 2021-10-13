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
        />
        <input type="button" value="Submit Code" className="submitButton"
        onClick={codeCompare}
        ></input>
    </form>

  );
}

