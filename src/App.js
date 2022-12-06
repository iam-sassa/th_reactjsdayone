import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input';
import './components/button/Button.style.css';
import { useState } from 'react';

function App() {
  // const [nama, setNama] = useState('Sassa');
  const [counter, setCounter] = useState(0);

  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const [summary, setSummary] = useState('');

  // const inputChange = (e) => {
  //   setNama(e.target.value);
  // };

  const food = [
    "banana milk",
    "banana",
    "chocolate bar",
    "mooncake"
  ];

  const tambahHandler = () => {
    setCounter(counter + 1);
  };

  const kurangHandler = () => {
      setCounter(counter - 1);
    // counter == 0 ? alert('Angka minimum'): setCounter(counter - 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  // const clickButton = () => {
  //   alert('Button clicked');
  // }

  const handleClick = () => {
    setUpdated(message);
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const changeWeight = (event) => {
    setWeight(event.target.value);
  };

  const changeHeight = (event) => {
    setHeight(event.target.value);
  };

  const countResult = () => {
    let total = weight / ((height/100) * (height/100));

    setResult(total);
    console.log(total);

    if (total  < 18.5){
      setSummary('Kurang berat badan');
    }
    else if (total >= 18.5 && total < 22.9){
      setSummary('normal');
    }
    else if (total < 24.9 && total > 23){
      setSummary('kelebihan berat badan');
    }
    else if (total < 29.5 && total > 25){
      setSummary('obesitas tingkat 1');
    }
    else {
      setSummary('Obesitas tingkat 2');
    }
  }

  // const resultWeight = () => {
  //   setResult(result);
  // }

  // const changeWeight = (event)


  return (
    <div className="App">
      <div className="hello">
     <h1>Hello {updated}</h1>
     <input type="text" onChange={handleChange} value={message}/>

     <Button fungsi={handleClick} namaFungsi="Click"/>
      </div>


    <div className="counter">
     <h1>{counter}</h1>
     {counter == 100? alert('Max Number'): <Button fungsi={tambahHandler} namaFungsi="Tambah"/>}
     {counter != 0 && <Button fungsi={resetHandler} namaFungsi="Reset"/>}
     {counter == 0? null :  <Button fungsi={kurangHandler} namaFungsi="Kurang"/> }
     </div>


    <div className="map">
    <h1>List of Foods</h1>
    {food.map((item, index) => {
      return <p key={index}>{item}</p>
    })}
    </div>


  <div className="calculator">
  <h1>Berat : {weight}</h1>
      <Input fungsi={changeWeight} value={weight}/>
  <br/>
  <h1>Tinggi : {height}</h1>
      <Input fungsi={changeHeight} value={height}/>

      <h1> Your BMI result :</h1>
      <h1> {result} </h1>
      <h1>{summary}</h1>

     <Button fungsi={countResult} namaFungsi="Count"></Button>
     </div>
     

    </div>
    
  );
}



export default App;
