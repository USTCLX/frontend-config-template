import React, { PureComponent } from 'react';
import style from './index.module.scss';

export default class AsyncComponent extends PureComponent {
    render() {
        return <div className={style.async}>This is a async component</div>;
    }
}
