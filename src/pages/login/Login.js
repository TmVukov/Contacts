import React, { useState } from 'react';
import './Login.scss';
import { useStateContext } from '../../utils/stateProvider';
import { auth } from '../../utils/firebase';
import { Link, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useForm } from 'react-hook-form';
import FormError from '../../components/formError/FormError';
import { IoMdContact } from 'react-icons/io';
import { SET_CURRENT_USER } from '../../constants';

export default function LogIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const { dispatch } = useStateContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onHandleSubmit = (data) => {
    const { email, password } = data;

    setLoading(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: SET_CURRENT_USER,
          payload: { key: 'currentUser', value: user },
        });
        history.push('/');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        setTimeout(() => {
          setError('');
        }, 5000);
      });

    sessionStorage.setItem('user', JSON.stringify(email));
  };

  return (
    <div className="login__container">
      <Header>
        <Link to="/home">
          <IoMdContact className="home__logo" />
        </Link>
        <Link to="/signup">sign up</Link>
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
            className="login__form"
            noValidate
          >
            {error && <p className="login__error">{error} Please try again.</p>}

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
