import React from 'react';
import LoginForm from '../../pages/Login/LoginForm';


const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
