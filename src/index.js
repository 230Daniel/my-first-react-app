import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card.js'

ReactDOM.render(
  <React.StrictMode>
    <Card text="hello"/>
    <Card text="there"/>
  </React.StrictMode>,
  document.getElementById('root')
);
