import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import { inDev } from './utils/helpers';

import "./styles/main.scss"

ReactDOM.render(
    <Application/>,
    document.getElementById('app')
);

if (inDev() && module.hot) module.hot.accept();
