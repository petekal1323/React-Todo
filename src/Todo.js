import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase'


function Todo(props) {
    
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Deadline ⏰"/>
            </ListItem>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
  )
}

export default Todo