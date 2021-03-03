import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Register = ({ setIsAuthenticated }) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const clearFields = () => {
    setUserName('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
        },
      });
      setIsAuthenticated(true);
      clearFields();
      history.push('/products/new');
      //Redirect to last page user was on
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className='col-6 offset-3 box-shadow'>
      <h2 className='blue-title text-center'>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            id='username'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <p className='control'>
          <input
            type='text'
            className='form-control'
            id='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <p className='control'>
          <input
            type='password'
            className='form-control'
            id='confirmPassword'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </p>
        <div className='control d-flex justify-content-center'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
