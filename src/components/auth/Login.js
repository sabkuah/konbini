import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    console.log('submitted!!');
  };

  return (
    <div className='col-6 offset-3 box-shadow'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p className='control'>
          <input
            type='text'
            className='form-control'
            id='username'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </p>

        <p className='control'>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>

        <div className='control'>
          <button className='button is-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
