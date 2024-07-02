import { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Forms/Input'; 
import AuthContext from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

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
          login(values)
          .then(() => {
            navigate('/')
          })
          .catch((err) => {
            console.log(err)
            setSubmitting(false)
        })
        }}
      >
        {({ setFieldValue, isSubmitting, errors }) => (
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
          {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging In...' : 'Login'}
                </button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
