import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import CoinsIndex from './containers/CoinsIndex'
import CoinsShow from './containers/CoinsShow'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={CoinsIndex} />
    <Route path="coins/:id" component={CoinsShow} />
  </Route>
)
