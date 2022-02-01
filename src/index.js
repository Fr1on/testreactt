import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styled from "styled-components";
import {createStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {store} from "./components/store";
import {BrowserRouter} from "react-router-dom";

const Qwe = styled.div`
  width: 100%;
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
`



ReactDOM.render(
<BrowserRouter>
        <Qwe>
            <App/>
        </Qwe>
</BrowserRouter>,

  document.getElementById('root')
);


