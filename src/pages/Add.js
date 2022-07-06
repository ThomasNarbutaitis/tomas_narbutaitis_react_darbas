import React from 'react';
import Input from '../components/Input/Input';
import Button from '../components/UI/Button';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import { useAuthCtx } from '../store/authContext';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import css from '../components/Input/Input.module.css';
import { baseUrl, myFetchAuth } from '../utils';
import { useHistory } from 'react-router-dom';

function Add() {
  const { token } = useAuthCtx();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string()
        .min(10, 'At least 10 symbols')
        .max(500, 'Maximum of 500 symbols')
        .required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log('values ===', values);

      const fetchResult = await myFetchAuth(
        `${baseUrl}/content/skills`,
        token,
        'POST',
        values
      );

      console.log('fetchResultinSkills ===', fetchResult);

      if (fetchResult.token) {
        history.replace('/');
      }
    },
  });

  return (
    <Container>
      <Title>Add skills Here</Title>
      <form onSubmit={formik.handleSubmit}>
        <div className='inputBox'>
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            name='title'
            type='text'
          >
            Title
          </Input>
          <p className='errors'>{formik.errors.title}</p>
          <div className='inputBox'>
            <label className={css.label} htmlFor='description'>
              Description
            </label>
            <textarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className={css.input}
              name='description'
              rows='4'
            ></textarea>
          </div>
          <p className='errors'>{formik.errors.description}</p>
        </div>
        <div className='btnBox'>
          <Button type='submit' className='prime'>
            Add Skill
          </Button>
          <Button onClick={() => formik.resetForm()} className='second'>
            Reset
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default Add;
