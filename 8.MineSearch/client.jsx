import * as ReactClientDOM from 'react-dom/client';
import React from "react";
import MineSearch from './MineSearch';

const container = document.querySelector("#root");
const root = ReactClientDOM.createRoot(container);

root.render(<MineSearch />);
