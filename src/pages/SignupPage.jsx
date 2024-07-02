import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Forms/Input';
import { register } from '../services/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 offset-4">
          <h2 className="text-center">Sign Up</h2>
          <Formik
            initialValues={{ firstname: '', lastname: '', email: '', password: '', imageUrl: null }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              lastName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              password: Yup.string()
                .min(6, 'Must be at least 6 characters')
                .required('Required'),
              imageUrl: Yup.mixed().required('Required field')
            })}
            onSubmit={(values, { setSubmitting, setErrors }) => {
              const formData = new FormData();
              formData.append('firstName', values.firstName);
              formData.append('lastName', values.lastName);
              formData.append('email', values.email);
              formData.append('password', values.password);
              formData.append('imageUrl', values.imageUrl);

              register(formData)
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
            {({ setFieldValue, isSubmitting, errors }) => (
              <Form>
                <Input
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
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
                <div className="form-group">
                  <label htmlFor="imageUrl">Image</label>
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    type="file"
                    className="form-control"
                    onChange={(event) => {
                      setFieldValue("imageUrl", event.currentTarget.files[0]);
                    }}
                  />
                </div>
                {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
