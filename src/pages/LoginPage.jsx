// Login.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Forms/Input'; 

const Login = () => {
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Lógica para manejar el envío del formulario
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <Input 
            label="Email" 
            name="email" 
            type="email" 
            placeholder="Email" 
          />
          <Input 
            label="Password" 
            name="password" 
            type="password" 
            placeholder="Password" 
          />
          <button type="submit" className="btn btn-primary">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
