import React, { PureComponent, Suspense } from 'react';
import ReactDom from 'react-dom';
import style from './index.module.scss';

const AscynComponent = React.lazy(() => import('./async/index'));

class App extends PureComponent {
    onClick = () => {};

    render() {
        return (
            <div className={style.example}>
                <div className={style.example_logo} />
                <h2 onClick={this.onClick}>Example</h2>
                <Suspense fallback={<div>loading...</div>}>
                    <AscynComponent />
                </Suspense>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
