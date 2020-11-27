import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import App from './App';
import reportWebVitals from './reportWebVitals';

setConfig({
    ignoreSFC: true,
    pureRender: true
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
