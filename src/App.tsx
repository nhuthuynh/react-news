import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import News from './pages/News';

function App(): JSX.Element {
    return (
        <main className="app container">
            <News />
        </main>
    );
}

export default hot(App);
