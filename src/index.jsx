import '../assets/stylesheets/application.scss';

import React from 'react'
import * as ReactDOM from 'react-dom';

const containerDiv = document.querySelector('#root');
const root = ReactDOM.createRoot(containerDiv);

const Hello = () => {
  return "hello";
};

root.render(<Hello />);
