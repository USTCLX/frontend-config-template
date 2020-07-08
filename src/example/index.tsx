import React from 'react';
import ReactDom from 'react-dom';
import style from './index.module.scss';

const App = () => {
    return (
        <div className={style.example}>
            <div className={style.logo} />
            <h2>Example</h2>
        </div>
    );
};
ReactDom.render(<App />, document.getElementById('app'));
