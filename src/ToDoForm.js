import { useState } from "react";

const [userInput, setUserInput] = useState('');

const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
}

<input value={userInput} type='text' onChange={handleChange} placeholder='Enter Something To Do' />