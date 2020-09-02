import React from 'react';
import ReactDOM from 'react-dom';

import Application from '.';

const title = 'Agency Application';

ReactDOM.render(
    <Application title={title} />,
    document.getElementById('app')
);

module.hot.accept();
