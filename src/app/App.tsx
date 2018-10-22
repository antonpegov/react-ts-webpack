import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
import "./styles/styles.scss";
declare let module: any

ReactDOM.render(<Hello compiler="Typescript" framework="React" bundler="Webpack4" />,
document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}