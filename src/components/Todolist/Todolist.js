import React from 'react';
import { Button } from 'reactstrap';

const Todolist = (props) => {
    let style ={
        color:'black',
        listStyleType:'none'
    }
    return (
        <ul style={style}>
            {props.todos.map((item,index)=>(
                <li key={item.id} className={item.status ? 'completed':''}>
                    {item.task} {item.name} {item.number}
                    <input onChange={()=> props.changeStatus(item.id)} type='checkbox' />
                    <Button  onClick={()=> props.handleDelete(item.id)}color="info">&times;</Button>{' '}
                    <Button  onClick={()=> props.handleEdit(index)}color="info">Edit</Button>{' '}
                    {/* <button onClick={() => props.handleDelete(item.id)}>&times;</button>
                    <button onClick={() => props.handleEdit(index)}>Edit</button> */}
                </li>
            ))}
        </ul>
    );
};

export default Todolist;