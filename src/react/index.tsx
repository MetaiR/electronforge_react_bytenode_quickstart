import {render} from "react-dom";
import {StrictMode} from 'react';
import {App} from "./components/app/app";
import './index.scss';

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);
