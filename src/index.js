import React, { Component } from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock";


const wrapper = document.getElementById("react-app");
wrapper ? ReactDOM.render(<Clock />, wrapper) : false;