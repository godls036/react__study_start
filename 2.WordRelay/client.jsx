import * as ReactClientDOM from 'react-dom/client';

const React = require('react');
const container = document.querySelector("#root");
const root = ReactClientDOM.createRoot(container);

const WordRelayFunction = require('./WordRelayFunction');

root.render(<WordRelayFunction />);
