import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import { NextUIProvider } from '@nextui-org/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> <ThemeProvider>
    <NextUIProvider><App /></NextUIProvider>
    
      
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

