import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import "./styles/App.css";
import "./styles/Administrador.css";
import "./styles/Vendedor.css";
import "./styles/Comprador.css";
//import reportWebVitals from "./reportWebVitals";

axios
  .get('/api/dummydata/testdata')
  .then(_ => console.log(':: dummy data added ::'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
