import React, { PureComponent, Suspense } from 'react';
import ReactDom from 'react-dom';
import style from './index.module.scss';

class App extends PureComponent<{}, { asyncComponent: React.ReactNode }> {
    constructor(props: any) {
        super(props);
        this.state = {
            asyncComponent: null,
        };
    }

    onClick = () => {
        if (this.state.asyncComponent != null) return;
        const AscynComponent = React.lazy(() => import('./async/index'));
        this.setState({
            asyncComponent: (
                <Suspense fallback={<div>loading...</div>}>
                    <AscynComponent></AscynComponent>
                </Suspense>
            ),
        });
    };

    render() {
        const { asyncComponent } = this.state;
        return (
            <div className={style.example}>
                <div className={style.example_logo} />
                <h2 onClick={this.onClick}>Example(click me!)</h2>
                {asyncComponent}
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
