import React from 'react';
import ReactDOM from 'react-dom';
import HowTo from './components/HowTo';

const App = () => {
  return(
    <HowTo />
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);