import { useState,useEffect } from 'react';
import './App.css';
import './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to the db and fetch new todos
  useEffect(()=> {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    //console.log(snapshot.docs.map(doc => doc.data().todo));
    setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>To Do</h1>
      <form>
      <FormControl className='form-control'>
        <InputLabel>Write a ToDo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>

      <Button disabled={!input} className='addTodoBtn' variant="contained" color="primary" type='submit' onClick={addTodo}>Add Todo</Button>
      </FormControl> 
    </form>
      
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      
    </div>
  );
}

export default App;
