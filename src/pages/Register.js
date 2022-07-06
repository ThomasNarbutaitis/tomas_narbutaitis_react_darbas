import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import Input from '../components/Input/Input';
import Button from '../components/UI/Button';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import '../App.css';
import { baseUrl, myFetch } from '../utils';
import Feedback from '../components/Feedback/Feedback';

function Register() {
  const [feedback, setFeedback] = useState('');
  const [feedClass, setFeedClass] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string()
        .min(5, 'At least 5 symbols')
        .max(15, 'Maximum of 15 symbols')
        .required('Required'),
      repPassword: Yup.string()
        .min(5, 'At least 5 symbols')
        .max(15, 'Maximum of 15 symbols')
        .required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const regObj = {
        email: values.email,
        password: values.password,
      };

      const fetchResult = await myFetch(
        `${baseUrl}/auth/register`,
        'POST',
        regObj
      );

      console.log('fetchResult ===', fetchResult);
      if (!fetchResult.LastID) {
        setFeedback('Registration unsuccessful... Please try again');
        setFeedClass('alert');
      }
      setFeedback('Registration was successful');
      setFeedClass('success');

      resetForm({ values: '' });
    },
  });

  return (
    <Container>
      <Title>Please Register Here</Title>
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

          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repPassword}
            name='repPassword'
            type='password'
          >
            Repeat Password
          </Input>
          <p className='errors'>{formik.errors.repPassword}</p>
        </div>
        <div className='btnBox'>
          <Button type='submit' className='prime'>
            Register
          </Button>
          <Button onClick={() => formik.resetForm()} className='second'>
            Reset
          </Button>
        </div>
        <Feedback className={feedClass}>{feedback}</Feedback>
      </form>
    </Container>
  );
}

export default Register;
