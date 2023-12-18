import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { useLoginMutation } from '@common/API/services/auth';

import Button from '@components/elements/Button';
import Input from '@components/elements/Input';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const validationSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    password: z.string().min(1, 'Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange', // set onTouched if onChange has too much impact on performance
  });

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    login(data.email).then(() => navigate('/'));
    console.log(data);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-2xl shadow-sky-400/50 sm:p-6 md:p-8">
        <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-center text-xl font-medium text-white">Sign in to your account</h5>
          <Input
            labelValue="Your email"
            type="email"
            id="email"
            defaultValue="Nathan@yesenia.net"
            className="mt-2 font-normal placeholder:italic placeholder:text-slate-400"
            placeholder="user@example.com"
            error={errors['email']}
            register={register('email')}
          />
          <Input
            labelValue="Password"
            type="password"
            id="password"
            defaultValue="123"
            className="mt-2 placeholder:text-slate-400"
            placeholder="••••••••"
            error={errors['password']}
            register={register('password')}
          />
          <div className="text-center">
            <Button color="primary" size="lg" className="my-2" type="submit">
              Sign in
            </Button>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Don’t have an account yet?{' '}
            <Link to={'/'} className="text-sky-500">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
