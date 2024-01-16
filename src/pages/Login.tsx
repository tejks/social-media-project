import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { useSigninMutation } from '@/common/API/services/auth';
import Button from '@components/elements/Button';
import Input from '@components/elements/Input';

type FormValues = {
  email: string;
  password: string;
};

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
    mode: 'onChange',
  });

  const [signIn] = useSigninMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) =>
    signIn({ email, password }).then(() => navigate('/posts'));

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex max-w-sm flex-col items-center rounded-xl p-4 shadow-2xl sm:p-6 md:p-8 lg:max-w-lg">
        <h5 className="mb-12 text-center text-2xl font-medium text-white lg:text-4xl">
          Sign in to your&nbsp;
          <p className="inline-block bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] bg-clip-text  text-transparent">
            Account
          </p>
        </h5>
        <form className="mx-12 space-y-6 lg:w-3/4" action="#" onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelValue="Your email"
            type="email"
            id="email"
            defaultValue="szymon@gmail.com"
            className=""
            placeholder="user@example.com"
            error={errors['email']}
            register={register('email')}
          />
          <Input
            labelValue="Password"
            type="password"
            id="password"
            defaultValue="123123123"
            className=""
            placeholder="••••••••"
            error={errors['password']}
            register={register('password')}
          />

          <div className="text-center">
            <Button color="primary" size="lg" className="my-2" type="submit">
              Sign in
            </Button>
          </div>

          <div className="text-xs font-medium text-gray-500 dark:text-gray-300 lg:text-sm">
            Don’t have an account yet?{' '}
            <Link to={'/signup'} className="text-[#FB9D1F]">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
