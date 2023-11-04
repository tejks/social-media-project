import { Link } from 'react-router-dom';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';

function LoginForm() {
  return (
    <div className="w-full bg-white-100 rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <Input
              type="email"
              id="email"
              className="placeholder:text-slate-400 placeholder:italic"
              placeholder="user@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <Input type="password" id="password" className="placeholder:text-slate-400" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start cursor-pointer hover:text-fuchsia-700">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-fuchsia-700 cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-500 cursor-pointer hover:text-fuchsia-700">
                  Remember me
                </label>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-gray-500 hover:underline hover:text-fuchsia-700">
              Forgot password?
            </a>
          </div>
          <div className="text-center">
            <Link to={'/'}>
              <Button type="submit" color="primary" size="lg" className="my-2" onClick={() => null}>
                Sign in
              </Button>
            </Link>
          </div>
          <p className="text-sm font-light text-gray-500">
            Don’t have an account yet?{' '}
            <a href="#" className="font-medium text-fuchsia-700 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
