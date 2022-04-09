import * as ReactClientDOM from 'react-dom/client';
import React from "react";
import LottoFunction from "./LottoFunction";

const container = document.querySelector("#root");
const root = ReactClientDOM.createRoot(container);

root.render(<LottoFunction />);
