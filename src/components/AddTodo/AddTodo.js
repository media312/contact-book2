import React,{useState} from 'react';
import { Button } from 'reactstrap';
const AddTodo = (props) => {
       
    let [value,setValue] = useState('');
    let [name,setName]=useState('');
    let [number,setNumber]=useState('')


    function handleClick(){
        let newObj ={
            task: value, 
            number: number,
            name: name,
            id: Date.now(),
            status: false
        }
       
        props.handleTask(newObj)
        setValue('')
        setName('')
        setNumber('')
    } 
    return (
        <div>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Фамилия"/>
            <input  value={number} onChange={(e)=> setNumber(e.target.value)} type="text"placeholder="Имя"/>
            <input value={value} onChange={(e)=>setValue(e.target.value)} type="text    " placeholder="Номер Телефона"/>
            {/* <button onClick={handleClick} >ADD</button> */}
            <Button  onClick={handleClick}color="info">Add</Button>{' '}
        </div>
    );
    }

export default AddTodo;