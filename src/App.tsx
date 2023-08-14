import React from 'react';

interface AppProps {
  message: string;
}

type MyType ={
  message: string;
}

const App = ({ message }: MyType) => {
  return <div>{message}</div>;
};

export default App;
