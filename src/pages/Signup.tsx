import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useSignupMutation } from '@/common/API/services/auth';
import AvatarDropzone from '@/components/Dropzone/AvatarDropzone';
import Button from '@components/elements/Button';
import Input from '@components/elements/Input';
import { Link, useNavigate } from 'react-router-dom';

type FormValues = {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

const Signup: React.FC = () => {
  const validationSchema = z
    .object({
      email: z.string().min(1, 'Email is required').email('Invalid email format'),
      password: z.string().min(1, 'Password is required'),
      userName: z.string().min(1, 'Username is required'),
      confirmPassword: z.string().min(1, 'Confirm password is required'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const [signUp] = useSignupMutation();
  const [userImage, setUserImage] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async ({ email, password, userName }) => {
    const formData = new FormData();

    formData.append('username', userName);
    formData.append('email', email);
    formData.append('password', password);

    if (userImage) formData.append('file', userImage);
    setUserImage(null);

    await signUp(formData);
    navigate('/login');
  };
  const onDropImage = (acceptedFile: File) => setUserImage(acceptedFile);
  const onClearImage = () => setUserImage(null);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mt-20 flex flex-col items-center rounded-xl shadow-2xl lg:mt-0 lg:w-2/3 xl:w-3/5 2xl:w-2/5">
        <h5 className="mb-8 text-center text-2xl font-medium text-white lg:mb-12 lg:text-4xl">
          Sign up to&nbsp;
          <p className="inline-block bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] bg-clip-text  text-transparent">
            Wolfy
          </p>
        </h5>

        <div className="grid w-full grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center">
            <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
              <Input
                labelValue="Your email"
                type="email"
                id="email"
                className=""
                placeholder="example@example.com"
                error={errors['email']}
                register={register('email')}
              />
              <Input
                labelValue="Username"
                type="text"
                id="userName"
                className=""
                placeholder="example"
                error={errors['userName']}
                register={register('userName')}
              />
              <Input
                labelValue="Password"
                type="password"
                id="password"
                className=""
                placeholder="•••••••••••••"
                error={errors['password']}
                register={register('password')}
              />
              <Input
                labelValue="Confirm password"
                type="password"
                id="confirmPassword"
                className=""
                placeholder="•••••••••••••"
                error={errors['confirmPassword']}
                register={register('confirmPassword')}
              />

              <div className="flex justify-center lg:hidden">
                <AvatarDropzone onDrop={onDropImage} onClear={onClearImage} />
              </div>

              <div className="text-center">
                <Button color="primary" size="lg" className="my-0.5 lg:my-2" type="submit">
                  Sign up
                </Button>
              </div>

              <div className="text-center text-xs font-medium text-gray-300 lg:text-sm">
                You already have an account?{' '}
                <Link to={'/login'} className="text-[#FB9D1F]">
                  Login
                </Link>
              </div>
            </form>
          </div>

          <div className="hidden justify-center lg:flex">
            <AvatarDropzone onDrop={onDropImage} onClear={onClearImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
