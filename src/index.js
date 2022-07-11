//Entry Point of the App
//import is possible because of WebPack which does all the bundling
import React from 'react';
import ReactDOM from 'react-dom/client'; //for websites (React Native exists also)
import './index.css';
import "tachyons";
import App from "./App";
import { robots } from "./robots";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
     <App robots={robots} />
    </>
  </React.StrictMode>
);

