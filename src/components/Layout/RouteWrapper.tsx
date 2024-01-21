interface RouteWrapperProps {
  children: React.ReactNode;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ children }) => {
  return <div className="flex h-screen flex-col justify-between">{children}</div>;
};

export default RouteWrapper;
