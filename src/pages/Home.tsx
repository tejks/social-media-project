import React, { useEffect } from 'react';
import { env } from '../config/env';

const Home: React.FC = () => {
  useEffect(() => {
    console.log(env);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
    </div>
  );
};

export default Home;
