import React from 'react';
import ReactDOM from 'react-dom';
import {BangDream} from './Component/BangDream';
import registerServiceWorker from './registerServiceWorker';


var memberlist = ["hoge"];


ReactDOM.render(<BangDream members={memberlist}/>, document.getElementById('bang'));
registerServiceWorker();
