import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '../components/Input/Input';
import Button from '../components/UI/Button';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import { useAuthCtx } from '../store/authContext';
import css from '../components/Input/Input.module.css';
import { baseUrl, myFetchAuth } from '../utils';
import Feedback from '../components/Feedback/Feedback';
import '../App.css';

function AddPage() {
  const [feedback, setFeedback] = useState('');
  const [feedClass, setFeedClass] = useState('');
  const { token } = useAuthCtx();

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
      const fetchResult = await myFetchAuth(
        `${baseUrl}/content/skills`,
        token,
        'POST',
        values
      );

      if (fetchResult.msg) {
        setFeedback('Skill was added successfuly');
        setFeedClass('success');
        resetForm({ values: '' });
        return;
      }
      setFeedback('Something went wrong... Please try again');
      setFeedClass('alert');
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
            placeholder='your skill title...'
          >
            Title
          </Input>
          <p className='errors'>{formik.errors.title}</p>
          <div className={css.inputBox}>
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
              placeholder='description of your skill...'
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
        <Feedback className={feedClass}>{feedback}</Feedback>
      </form>
    </Container>
  );
}

export default AddPage;
