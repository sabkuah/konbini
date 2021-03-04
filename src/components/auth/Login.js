import React, { useState, useContext } from 'react';
import UserContext from '../../context/user/userContext';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Login = () => {
  const userContext = useContext(UserContext);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn({
        username,
        password,
      });
      userContext.loginUser();
      setUserName('');
      setPassword('');
      history.push('/products/new');
      //Redirect to last page user was on
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className='col-6 offset-3 box-shadow'>
      <h2 className='blue-title text-center'>Login</h2>
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

        <div className='control d-flex justify-content-center'>
          <button className='button is-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
