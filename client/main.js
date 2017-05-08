import React from 'react';
import ReactDom from 'react-dom';

import App from '../imports/components/app';

Meteor.startup(() => {
  ReactDom.render(<App />, document.querySelector('.render-target'));
});