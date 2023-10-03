import '../assets/stylesheets/application.scss';

import React from 'react'
import * as ReactDOM from 'react-dom/client';
import App from "./components/App";

const containerDiv = document.querySelector('#root');
const root = ReactDOM.createRoot(containerDiv);
root.render(<App />);

// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props;
//     return <h1>Hello {name}, you are {age} years old!!!</h1>;
//   }
// }

// const Hello = (props) => {
//   console.log(props);
//   const { name, age } = props;
//   return <h1>Hello {name}, you are {age} years old!!!</h1>;
// };
