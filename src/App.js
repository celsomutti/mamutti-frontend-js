import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Header from "../src/components/header/Header";


const App = props => (
    <div className='App'>
        <Header />
    </div>
)

export default hot(module)(App);
