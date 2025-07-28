import React, { useEffect, useState } from "react";

const withAuthentication = (WrappedComponent) => {
  return function AuthComponent(props) {
    const { isAuthenticated } = props;
    if (!isAuthenticated) {
      return <p>You must be logged in to view this content.</p>;
    }
    return <WrappedComponent {...props} />;
  };
};


const withLogger = (WrappedComponent) => {
  const ComponentWithLogger = (props) => {
    useEffect(() => {
      const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`${name} rendered`);
    }, []);

    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };

  ComponentWithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithLogger;
};

const withDataFetching = (WrappedComponent, fetchFn) => {
  return function DataFetchingComponent(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchFn().then((result) => {
        setData(result);
        setLoading(false);
      });
    }, []);

    return <WrappedComponent {...props} {...data} loading={loading} />;
  };
};

const UserProfile = ({ name, email, loading }) => {
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
const fetchUser = async () => {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { name: data.name, email: data.email };
};

const ProtectedUserProfile = withAuthentication(
  withLogger(withDataFetching(UserProfile, fetchUser))
);

export default ProtectedUserProfile;
