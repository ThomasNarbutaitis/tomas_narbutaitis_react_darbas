import React, { useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/UI/Button';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';

function Register() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repPass, setRepPass] = useState('');

  function emailEnterHandler(event) {
    setEmail(event.target.value);
  }

  function passEnterHandler(event) {
    setPass(event.target.value);
  }

  function repPassEnterHandler(event) {
    setRepPass(event.target.value);
  }

  function submitRegistration(event) {
    const regObj = {
      email: email,
      password: pass,
    };
    console.log('regObj ===', regObj);
  }

  function resetForm() {
    setEmail('');
    setPass('');
    setRepPass('');
  }

  return (
    <Container>
      <Title>Please Register Here</Title>
      <form>
        <div className='inputBox'>
          <Input
            onChange={emailEnterHandler}
            value={email}
            name='email'
            type='email'
          >
            Email
          </Input>
          <Input
            onChange={passEnterHandler}
            value={pass}
            name='password'
            type='password'
          >
            Password
          </Input>
          <Input
            onChange={repPassEnterHandler}
            value={repPass}
            name='repPassword'
            type='password'
          >
            Repeat Password
          </Input>
        </div>
        <div className='btnBox'>
          <Button onClick={submitRegistration} type='submit' className='prime'>
            Submit
          </Button>
          <Button onClick={resetForm} className='second'>
            Reset
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default Register;
