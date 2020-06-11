import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './data/videos.json';
import { VideoNode } from './models/VideoNode';

const loadData = () => {
  const newData: { [id: string]: VideoNode } = data;
  return newData;
}

ReactDOM.render(
  <React.StrictMode>
    <App nodes={loadData()} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
