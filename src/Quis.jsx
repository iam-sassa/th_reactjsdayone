import react from 'react';
import Button from './components/button/Button';
import Input from './components/input/Input';
import './components/button/Button.style.css';
import './Quiz.css';
import { useState } from 'react';

// const Quiz = () => {
//     return (
//         <div>
//             <h1>Quiz grade</h1>
//         </div>

//     );
// };

function Quiz(){

  const [math, setMath] = useState(0);
  const [physic, setPhysic] = useState(0);
  const [biology, setBiology] = useState(0);
  const [chemistry, setChemistry] = useState(0);
  const [science, setScience] = useState(0);
  const [average, setAverage] = useState(0);
  const [summary, setSummary] = useState('');


  const changeMath = (event) => {
    setMath(event.target.valueAsNumber);
  };

  const changePhysic = (event) => {
    setPhysic(event.target.valueAsNumber);
  };

  const changeBiology = (event) => {
    setBiology(event.target.valueAsNumber);
  };

  const changeChemistry = (event) => {
    setChemistry (event.target.valueAsNumber);
    
  };

  const changeScience = (event) => {
    setScience(event.target.valueAsNumber);
  };

  const countAverage = () => {
    let nilai = chemistry + math + physic + biology + science;
    let total = nilai / 5;

    setAverage(total);
    if (total  > 0 && total <= 40){
      setSummary('E');
    }
    else if (total  > 40.01 && total <= 48){
      setSummary('D');
    }
    else if (total  > 48.01 && total <= 56){
      setSummary('C');
    }
    else if (total  > 56.01 && total <= 64){
      setSummary('BC');
    }
    else if (total  > 64.01 && total <= 72){
        setSummary('B');
      }
      else if (total  > 72.01 && total <= 80){
        setSummary('AB');
      }
    else {
      setSummary('A');
    }
  }



    return (
        <div className="report">
            <div className="input">
            <label htmlFor="math">Matematika</label><br/>
            <Input fungsi={changeMath} value={math}/>
            <br/>
           <label htmlFor="physic">Fisika</label><br/>
            <Input fungsi={changePhysic} value={physic}/>
            <br/>
            <label htmlFor="biology">Biologi</label><br/>
                <Input fungsi={changeBiology} value={biology}/>
            <br/>
           <label htmlFor="chemistry">Kimia</label><br/>
            <Input fungsi={changeChemistry} value={chemistry}/>
            <br/>
            <label htmlFor="science">Saintek</label><br/>
            <Input fungsi={changeScience} value={science}/>
            <br/>

                <Button fungsi={countAverage} namaFungsi="Submit"></Button>
            </div>

            <div className="result">

            <h1> Your Report</h1>
            <h1>---------------------</h1>
            <p>Matematika : {math} </p>
            <p>Fisika : {physic} </p>
            <p>Biologi : {biology}</p>
            <p>Kimia : {chemistry} </p>
            <p>Saintek : {science}</p>
            <p>Average : {average}</p>

            <h1>---------------------</h1>
            <h1>Your Grade : </h1>
            <h1>{summary}</h1>

            </div>
        </div>

    );

};

export default Quiz;
