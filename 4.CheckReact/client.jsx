import * as ReactClientDOM from 'react-dom/client';
import React from 'react';
import ResponseCheckFunction from './ResponseCheckFunction';


const container = document.querySelector("#root");
const root = ReactClientDOM.createRoot(container);

root.render(<ResponseCheckFunction />);
