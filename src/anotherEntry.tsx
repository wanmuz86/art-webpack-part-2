import React from 'react';
import ReactDOM from 'react-dom/client';
import AnotherComponent from './AnotherComponent';
import './styles.css';  // Import CSS file

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <AnotherComponent />
        </React.StrictMode>
    );
}