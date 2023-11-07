import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import { useLoginMutation } from '../common/API/services/auth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');

  const [login] = useLoginMutation();

  const onSubmit = () => {
    login(email).then(() => navigate('/'));
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6">
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
            <div className="flex items-center justify-between">
              <div className="flex items-start cursor-pointer">
                <div className="flex items-center group">
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium text-gray-500 cursor-pointer group-hover:text-fuchsia-700"
                  >
                    Remember me
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-fuchsia-700 cursor-pointer group-hover:border-fuchsia-700 float-left mr-2 mt-0.5"
                    />
                  </label>
                </div>
              </div>
              <Link to={''} className="text-sm font-medium text-gray-500 hover:underline hover:text-fuchsia-700">
                Forgot password?
              </Link>
            </div>
            <div className="text-center">
              <Button color="primary" size="lg" className="my-2" onClick={onSubmit}>
                Sign in
              </Button>
            </div>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{' '}
              <Link to={''} className="font-medium text-fuchsia-700 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
