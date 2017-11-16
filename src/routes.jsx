import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import CoinsIndex from './containers/CoinsIndex'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={CoinsIndex} />
  </Route>
)
