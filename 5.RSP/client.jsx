import * as ReactClientDOM from 'react-dom/client';
import React from 'react';
import RSPFunction from './RSPFunction';

const container = document.querySelector("#root");
const root = ReactClientDOM.createRoot(container);

root.render(<RSPFunction />);
