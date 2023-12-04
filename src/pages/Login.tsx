import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useLoginMutation } from '@common/API/services/auth';

import Button from '@components/elements/Button';
import Input from '@components/elements/Input';

const Login: React.FC = () => {
  const navigate = useNavigate();
  // Default email for testing purposes
  const [email, setEmail] = React.useState('Nathan@yesenia.net');

  const [login] = useLoginMutation();

  const onSubmit = () => {
    login(email).then(() => navigate(-1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-sm p-4 border rounded-xl sm:p-6 md:p-8 bg-gray-800 border-gray-700 shadow-2xl shadow-sky-400/50">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-white text-center">Sign in to your account</h5>
          <Input
            labelValue="Your email"
            type="email"
            id="email"
            className="placeholder:text-slate-400 placeholder:italic mt-2 font-normal"
            placeholder="user@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            labelValue="Password"
            type="password"
            id="password"
            className="placeholder:text-slate-400 mt-2"
            placeholder="••••••••"
          />

          <div className="text-center">
            <Button color="primary" size="lg" className="my-2" onClick={onSubmit}>
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
