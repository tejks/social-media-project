import { env } from './config/env';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(env);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
