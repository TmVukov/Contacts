import React, { useState, useContext } from 'react';
import './Signup.scss';
import { StateContext } from '../../utils/stateProvider';
import { auth } from '../../utils/firebase';
import { Link, useHistory } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';
import Loader from 'react-loader-spinner';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useForm } from 'react-hook-form';
import FormError from '../../components/formError/FormError';
import { IoMdContact } from 'react-icons/io';

export default function SignUp() {  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { setUsername, setCurrentUser } = useContext(StateContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onHandleSubmit = (data) => {
    const { username, email, password } = data;

    setLoading(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setCurrentUser(user);
        history.push('/');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);

        setTimeout(() => {
          setError('');
        }, 5000);
      });

    setUsername(username);
    sessionStorage.setItem('user', JSON.stringify(email));

    const user = { email, username };

    axiosInstance
      .post('users.json/', user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup__container">
      <Header>
        <Link to="/home">
          <IoMdContact className="home__logo" />
        </Link>
        <Link to="/login">log in</Link>
      </Header>

      <main>
        {loading ? (
          <Loader
            className="loader"
            type="Oval"
            color="#C7E2F7"
            height={80}
            width={80}
          />
        ) : (
          <form
            onSubmit={handleSubmit(onHandleSubmit)}
            className="signup__form"
            noValidate
          >
            {error && <p className='signup__error'>{error}</p>}

            <label>Username</label>
            <input
              {...register('username', {
                required: '⚠ Username is required',
                minLength: {
                  value: 3,
                  message: '⚠ Username should contain at least 3 characters',
                },
              })}
              type="text"
              placeholder="Enter username"
            />
            <FormError>
              {errors.username && <p>{errors.username.message}</p>}
            </FormError>

            <label>Email</label>
            <input
              {...register('email', {
                required: '⚠ Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: '⚠ Please enter valid email',
                },
              })}
              type="email"
              placeholder="Enter email"
            />
            <FormError>
              {errors.email && <p>{errors.email.message}</p>}
            </FormError>

            <label>Password</label>
            <input
              {...register('password', {
                required: '⚠ Password is required',
                minLength: {
                  value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[$#!+-]).{6,}$/,
                  message:
                    '⚠ Password should contain: at least 6 characters, 1 number and 1 special character: +, -, !, #, $.',
                },
              })}
              type="password"
              placeholder="Enter password"
            />
            <FormError>
              {errors.password && <p>{errors.password.message}</p>}
            </FormError>

            <button>Submit</button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}
