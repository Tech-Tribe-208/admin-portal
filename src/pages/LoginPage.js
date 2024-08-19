import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginForm, Input, Button } from '../styles';
import apiRequests from '../apiRequests';
import { showAlert, showToast } from '../components/Alert';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (adminData) => {
    try {
      const response = await apiRequests.login(adminData);
      console.log(adminData);
      console.log(response);
      if (response.status === 200) {
        navigate('/dashboard');
        showToast("success", "Logged in successfully");
      } 
      else if(response.status === 401){
        console.error('Invalid password');
        showAlert("error", "Log in erreor", "Invalid password")
      }
      else if(response.status === 404){
        console.error('Admin not found');
        showAlert("error", "Login error", "Admin does not exist")
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <Input type="text" placeholder="Username" {...register('username')} />
      <p>{errors.username?.message}</p>
      <Input type="password" placeholder="Password" {...register('password')} />
      <p>{errors.password?.message}</p>
      <Button type="submit">Login</Button>
    </LoginForm>
  );
};

export default LoginPage;
