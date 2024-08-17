import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginForm, Input, Button } from '../styles';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = data => {
    // Perform login logic here
    navigate('/dashboard');
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <Input type="text" placeholder="Username" {...register('username')} />
      <p>{errors.username?.message}</p>
      <Input type="password" placeholder="Password" {...register('password')} />
      <p>{errors.password?.message}</p>
      <Button onClick={() =>onSubmit('go')} type="submit">Login</Button>
    </LoginForm>
  );
};

export default LoginPage;
