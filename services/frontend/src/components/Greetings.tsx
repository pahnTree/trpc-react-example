import type React from 'react'; 
import { useState } from 'react';
import { trpc } from "../utils/trpc";

const Greetings = () => {
  const [name, setName] = useState('')
  const [_name, _setName] = useState('')
  const greeting = trpc.useQuery(['core.greeting', { text: name }])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(_name);
  }

  if (!greeting.data) return <div>Loading...</div>
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input name='name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => _setName(e.target.value)}/>
        </label>
        <button type='submit'>Get greeting</button>
      </form>
      <span>{greeting.data.greeting}</span>
    </div>
  )
};

export default Greetings;
