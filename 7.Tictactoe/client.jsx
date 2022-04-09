import * as ReactClientDOM from 'react-dom/client';
import React from "react";
import TicTacToe from "./TicTacToe";

const container = document.querySelector("#root");
const root = ReactClientDOM.createRoot(container);

root.render(<TicTacToe />);
