import React from 'react';
import ReactDom from 'react-dom';

import App from '../imports/components/app';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  ReactDom.render(<App />, document.querySelector('.render-target'));
});