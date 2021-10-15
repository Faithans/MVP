import React, {useState} from "react";
// import compare from '../../database/model/compare.js'
import axios from "axios";
export default function CodeType({answer, setStepIdx, stepIdx}) {

  const [currentCode, setCurrentCode] = useState('');


  const postCode = (e) => {
    e.preventDefault();
    axios.post('/ds/submit', {currentCode, stepIdx})
    .then((response) => {
      console.log(response.data);
      let result = response.data;
      let resultStr = '';
      let passFlag = true;
      for(let key in result) {
        resultStr+= `${key}: ${result[key]} `;
        resultStr+='\n';
        if(result[key] !== 'passed') {
          passFlag = false;
        }
      }
      if(passFlag) {
        setCurrentCode(resultStr);
        setInterval(() => {setStepIdx(stepIdx + 1); setCurrentCode('');}, 5000)
      } else {
        setCurrentCode(resultStr);
      }
    })
    .catch(err => console.error(err))

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
          placeholder="You got this Louis! Let's crush the interview!"
        />
        <button  value="Submit Code" className="submitButton"
        onClick={postCode}
        >Submit</button>
    </form>

  );
}

