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
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">{error.status}</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

          <p className="mt-4 text-gray-500">We can't find that page.</p>

          <Link
            to={'/'}
            className="mt-6 inline-block rounded bg-fuchsia-700 px-5 py-3 text-sm font-medium text-white hover:bg-fuchsia-800 focus:outline-none focus:ring"
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
