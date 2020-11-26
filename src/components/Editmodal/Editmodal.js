import React, {useState} from 'react';
import './Editmodal.css'
import { Button } from 'reactstrap';

const Editmodal = (props) => {
    console.log(props.editTodo)
    let [item,setItem] = useState(props.editTodo)
    // let [name,setName]=useState(props.editTodo)
    // let [number,setNumber]=useState(props.editTodo)


    function handleEditInput(e){
        let newObj = {...item}
        newObj.task = e.target.value  
        setItem(newObj)
    }
    function handleEditInput1(e){
        let newObj = {...item}
        newObj.number = e.target.value
        setItem(newObj)
    }
    function handleEditInput2(e){
        let newObj = {...item}
        newObj.name= e.target.value
        setItem(newObj)
    }
    function handleSave(){
        props.handleSaveTask(item)
        // props.handleEditInput1(name)
        // props.handleEditInput2(number)
        
    }

   
    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input
                onChange={handleEditInput}
                type="text"
                value={item.task}
                className="inp-edit"
                />
                <input 
                value={item.number} 
                onChange={handleEditInput1}
                type="text"
                className="inp-edit"
                />
                <input 
                value={item.name} 
                onChange={handleEditInput2} 
                type="text"
                className="inp-edit"
                />
                {/* <button onClick={handleSave}> save</button> */}
                <Button  onClick={handleSave}color="info">Save</Button>{' '}
            </div>
            
        </div>
    );  
};

export default Editmodal;