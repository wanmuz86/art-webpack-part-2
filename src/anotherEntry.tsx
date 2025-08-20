import React from 'react';
import ReactDOM from 'react-dom/client';
import AnotherComponent from './AnotherComponent';

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <AnotherComponent />
        </React.StrictMode>
    );
}