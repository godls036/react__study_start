import * as ReactClientDOM from 'react-dom/client';
import React from 'react';
import NumberBaseballFunction from './NumberBaseballFunction';

const container = document.querySelector('#root');
const root = ReactClientDOM.createRoot(container);

root.render(<NumberBaseballFunction />);
