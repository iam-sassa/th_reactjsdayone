import react from 'react';

const Input = (props) => {

    return  <input type="number" onChange={props.fungsi} value={props.value}/>
}

export default Input;