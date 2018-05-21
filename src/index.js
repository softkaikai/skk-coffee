import React from 'react';
import ReactDom from 'react-dom';

// import global css style
import './css/index.scss';

import App from './page/app';

global.joinName = (...args) => {
    return args.reduce((pre, cur, index) => {
        return !!cur ? pre + ' ' + cur : pre;
    }, '')
};


ReactDom.render(<App />, document.getElementById('react-app'));


