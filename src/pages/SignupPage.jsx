import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Forms/Input';
import { register } from '../services/AuthService';


const Signup = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 offset-4">
          <h2 className="text-center">Sign Up</h2>
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={Yup.object({
              username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              password: Yup.string()
                .min(6, 'Must be at least 6 characters')
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, setErrors }) => {
              register(values)
                .then(response => {
                  console.log(response);
                  navigate('/login'); 
                })
                .catch(error => {
                  console.error(error);
                  setErrors({ submit: 'Registration failed. Please try again.' });
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting, errors }) => (
            <Form>
              <Input
                label="Username"
                name="username"
                type="text"
                placeholder="Username"
              />
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
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
