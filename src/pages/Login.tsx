import { useLoginMutation } from '../common/API/services/auth';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';

const Login: React.FC = () => {
  interface FormValues {
    email: string;
    password: string;
  }

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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-sm p-4 border rounded-xl sm:p-6 md:p-8 bg-gray-800 border-gray-700 shadow-2xl shadow-sky-400/50">
        <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-xl font-medium text-white text-center">Sign in to your account</h5>
          <Input
            labelValue="Your email"
            type="email"
            id="email"
            defaultValue="Nathan@yesenia.net"
            className="placeholder:text-slate-400 placeholder:italic mt-2 font-normal"
            placeholder="user@example.com"
            error={errors['email']}
            register={register('email')}
          />
          <Input
            labelValue="Password"
            type="password"
            id="password"
            defaultValue="123"
            className="placeholder:text-slate-400 mt-2"
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
