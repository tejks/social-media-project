import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    } else if (error.status === 404) {
      // ...
    }

    return (
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">{error.status}</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

          <p className="mt-4 text-gray-500">We can't find that page.</p>

          <Link
            to={'/'}
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-fuchsia-700 rounded hover:bg-fuchsia-800 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ErrorPage;
