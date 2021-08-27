import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';


function App() {
  // const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'Clean the house']);
  const [todos, setTodos] = useState(['abc','def']);
  const [input, setInput] = useState('');

//when the app loads, we need to listen to the database and fetch new todos as they get added/removed.

  useEffect(() => {
    //this code here.... fires when app.js loads
    db.collection('todos').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  //docs= every single todo added to the database

  const addTodo = (event) => {

    // this will fire off when we click the button
    event.preventDefault();
    console.log('👻', 'I am working!');
    setTodos([...todos, input]);

    setInput('');  //sets text input field to empty after each submit

    //set todos to an array but we need to keep what we have in the array currently
    //... todos - what preiously already exists and input says push whatever you have in the input

  }

  //react gives this function useState that sets up a short term memory for the app
  //todos array starts off with 'take dogs...', 'take...' 
  //setTodos is use to keep pending things to the array
  //whenever we want to set todos we have to use setTodos


  //will add another piece of short term memory
  // initialised empty bec that's how a page looks on opening
  
  return (
    <div className="App">
      <h1>Welcome to your To-do List 🚀 </h1>

      {/* link input to state by giving a value to input where we map this input to the input in the state*/}
      {/* after this on saving and running we wont be able to type anything this is because the value of input here is the value in the state which
      is always blank*/}
      {/* everytime we type we update the state to tell react- hang on you just changed the input nd we need to keep a track of that */}
      {/* so we add a onChange function which allows to capture an event which gets fired off everytime we press a key */}
      {/* everytime we click anything on the keyboard it fires an event and then an arrow key and then setInput that asks for the value at the target which
      is the input text field*/}

      {/* i.e whatever value we type in is the input and that value needs to be set in at the target */}
      <form>

          <FormControl>
               <InputLabel> ✅ Write a  todo</InputLabel>
               <Input value={input} onChange={event => setInput(event.target.value)}/>
          </FormControl>
          
          <Button disabled={!input} onClick={addTodo} type = "submit" variant="contained" color="primary">Add Todo</Button>
          {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>

      {/* we used a form tag here which will enable us to add items to todo with just an enter press 
      
      but one more thing happens in this step, which is
      enter click adds on items to list but they disappear very soon
      
      so now event.preventDefault works to not allow refresh on submitting*/}

      <ul>

        {/* now, we'll use a small loop which will go through the above list inside the todos array somehow perform JSX where tha map goes through 
        the array like for e.g it'll go throught the first element and we'll return it n then it'll go for the second and we'll return it*/}
        {/* when we go through the array i.e todos we weant to get every single todo i.e. todo then an arrow function and then paranthesis 
        which means we'll return some html */}

        {todos.map(todo =>(
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
