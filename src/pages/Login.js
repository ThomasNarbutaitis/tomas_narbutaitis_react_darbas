import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Input from '../components/Input/Input';
import Button from '../components/UI/Button';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import '../App.css';
import { baseUrl, myFetch } from '../utils';
import { useAuthCtx } from '../store/authContext';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const ctx = useAuthCtx();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string()
        .min(5, 'At least 5 symbols')
        .max(15, 'Maximum of 15 symbols')
        .required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      // console.log('values ===', values);

      const fetchResult = await myFetch(
        `${baseUrl}/auth/register`,
        'POST',
        values
      );

      // console.log('fetchResult ===', fetchResult);
      console.log('fetchResult.lastID ===', fetchResult.lastID);
      if (fetchResult.lastID) {
        ctx.login();
        // resetForm({ values: '' });
        history.replace('/');
      }
    },
  });
  return (
    <Container>
      <Title>Please Login Here</Title>
      <form onSubmit={formik.handleSubmit}>
        <div className='inputBox'>
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name='email'
            type='email'
          >
            Email
          </Input>
          <p className='errors'>{formik.errors.email}</p>
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name='password'
            type='password'
          >
            Password
          </Input>
          <p className='errors'>{formik.errors.password}</p>
        </div>
        <div className='btnBox'>
          <Button type='submit' className='prime'>
            Login
          </Button>
          <Button onClick={() => formik.resetForm()} className='second'>
            Reset
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default Login;
