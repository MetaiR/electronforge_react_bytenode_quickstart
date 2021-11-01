import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import {StrictMode} from 'react';
import {App} from "./app";
import './index.scss';
import {AppRouter} from "./app-router";

render(
    <StrictMode>
        <HashRouter>
            <App />
            <AppRouter />
        </HashRouter>
    </StrictMode>,
    document.getElementById('root')
);
