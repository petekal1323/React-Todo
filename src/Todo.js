import React from 'react';
import './Todo.scss';
import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase'


function Todo(props) {
    
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary=""/>
            </ListItem>
            <Button 
                onClick={event => db.collection('todos').doc(props.todo.id).delete()}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}>
                    Delete
                    </Button>

        </List>
  )
}

export default Todo