import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {QuizProvider}  from "./context/quiz";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizProvider>
    <App />
  </QuizProvider>  
);


