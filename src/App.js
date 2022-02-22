import { useState,useEffect } from 'react';
import './App.scss';
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
      <h1>Shopping List</h1>
      <form>
      <FormControl className='form-control'>
        <InputLabel>Add Item</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>

      <Button disabled={!input} className='addTodoBtn' variant="outlined" color="primary" type='submit' onClick={addTodo}>Add Item</Button>
      </FormControl> 
    </form>
      
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      
    </div>
  );
}

export default App;
