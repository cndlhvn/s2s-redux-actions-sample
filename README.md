# About
This is a smaple s2s redux actions project.

And This is a tutorial how to use redux actions s2s. This tutorial will explain how to create redux application with s2s.

# Getting start

Run this command to isntall libs.

```
$ yarn
```

# Start servers

a main react server build by create-react-app
```
$ yarn start
```
In other terminal window, you run a s2s server

```
$ yarn run s2s
```

The server launches react application in your browser. \
You can see crypto currencies which is pulled from public API server.

# Tutorial
So let's create a CoinsShow container and so on.

## Create Redux Actions

First you create a `src/actions/coin.js` as a practice.

And you can see wonderful s2s function. \
The `coin.js` is inserted this code `import { createAction } from 'redux-actions'` automatically.

It takes from templates folder.

Then you type `getCoinRequest` and save the file. \
S2s expands the code like this.

```js
import { createAction } from "redux-actions";

export const getCoinRequest = createAction("GET_COIN_REQUEST");
export const getCoinSuccess = createAction("GET_COIN_SUCCESS");
export const getCoinFailure = createAction("GET_COIN_FAILURE");
```

Also s2s inserts `coin.js` file path into `src/actions/index.js` \
s2s is watching it. So you never mind `src/actions/index.js`.

```js
export * from "./coin";
export * from "./coins";
```

## Create Redux Actions Reducers

Next you create a `src/reducers/coin.js`.

s2s creates a reducer file template.

```js
import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const initialState = {}

export default handleActions(
  {},
  initialState
)
```
You type `getCoinRequest` in the blank object within `export default handleActions({})`. \
Save it. S2s expands the code like this.

```js
import { handleActions } from "redux-actions";
import * as actions from "../actions";

const initialState = {};

export default handleActions(
  {
    [actions.getCoinRequest]: (state, action) => ({
      ...state
    }),
    [actions.getCoinSuccess]: (state, action) => ({
      ...state
    }),
    [actions.getCoinFailure]: (state, action) => ({
      ...state
    })
  },
  initialState
);
```
This is the final coin.js reducer file. Please update your code.
`initialState` belongs to public API returns value.
```js
import { handleActions } from "redux-actions";
import * as actions from "../actions";

const initialState = {
  coin: {
    id: "",
    name: "",
    symbol: "",
    rank: "",
    price_usd: "",
    price_btc: "",
    "24h_volume_usd": "",
    market_cap_usd: "",
    available_supply: "",
    total_supply: "",
    max_supply: "",
    percent_change_1h: "",
    percent_change_24h: "",
    percent_change_7d: "",
    last_updated: ""
  }
};

export default handleActions(
  {
    [actions.getCoinRequest]: (state, action) => ({
      ...state
    }),
    [actions.getCoinSuccess]: (state, action) => ({
      ...state,
      coin: action.payload[0]
    }),
    [actions.getCoinFailure]: (state, action) => ({
      ...state
    })
  },
  initialState
);
```

## Create Sagas

You create a `src/sagas/coin.js`.

s2s creates a saga file template.

```js
import { put, call,takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import api from '../api';

export default [];
```
You type `getCoinRequest` before the place of `export default [];` and save it. \
S2s expands the code like this.

```js
import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import api from "../api";

export function* handleGetCoinRequest(action) {
  try {
    const { data } = yield call(api.getCoinRequest, action.payload);
    yield put(actions.getCoinSuccess(data));
  } catch (error) {
    yield put(actions.getCoinFailure(error));
  }
}

export default [
  takeLatest(actions.getCoinRequest.toString(), handleGetCoinRequest)
];
```
## Create Axios api

You create a `src/api/coin.js`.

s2s creates a axios api file template.

```js
import axios from "../axiosConfig"
```

You type `getCoinRequest` and save it. \
S2s expands the code like this.

```js
import axios from "../axiosConfig";

export const getCoinRequest = config => axios.get(``, config);
```

This is the last coin.js api file. Please update your code.
```js
import axios from "../axiosConfig";

export const getCoinRequest = (id, config) =>
  axios.get(`/v1/ticker/${id}/`, config);
```

## Create CoinsShow Container

Ok you prepared to use redux acitons in containers. \
Let's create a page that display a detail information of coin.

You create a `src/containers/CoinsShow.js`.

s2s creates a container file template.

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

class ClassNameHere extends Component{
  render () {
    return ()
  }
}

ClassNameHere.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {}
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ClassNameHere)
```

Then please edit this file like this.

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'
import styled from 'styled-components'
import { Link} from 'react-router'
import {Breadcrumb,ListGroup,ListGroupItem,PageHeader,Panel} from 'react-bootstrap';

class CoinsShow extends Component{
  componentDidMount(){
   this.props.getCoinRequest(this.props.params.id)
  }
  render () {
    const { coin } = this.props
    return (
      <Wrapper>
        <PageHeader>Coins Show</PageHeader>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to='/'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {coin.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Panel header={coin.name}>
          <ListGroup>
            <ListGroupItem><small>id: {coin.id}</small></ListGroupItem>
            <ListGroupItem><small>name: {coin.name} </small></ListGroupItem>
            <ListGroupItem><small>symbol: {coin.symbol} </small></ListGroupItem>
            <ListGroupItem><small>rank: {coin.rank} </small></ListGroupItem>
            <ListGroupItem><small>price_usd: {coin.price_usd} </small></ListGroupItem>
            <ListGroupItem><small>price_btc: {coin.price_btc} </small></ListGroupItem>
            <ListGroupItem><small>24h_volume_usd: {coin["24h_volume_usd"]} </small></ListGroupItem>
            <ListGroupItem><small>market_cap_usd: {coin.market_cap_usd} </small></ListGroupItem>
            <ListGroupItem><small>available_supply: {coin.available_supply} </small></ListGroupItem>
            <ListGroupItem><small>total_supply: {coin.total_supply} </small></ListGroupItem>
            <ListGroupItem><small>max_supply: {coin.max_supply} </small></ListGroupItem>
            <ListGroupItem><small>percent_change_1h: {coin.percent_change_1h} </small></ListGroupItem>
            <ListGroupItem><small>percent_change_24h: {coin.percent_change_24h} </small></ListGroupItem>
            <ListGroupItem><small>percent_change_7d: {coin.percent_change_7d} </small></ListGroupItem>
            <ListGroupItem><small>last_updated: {coin.last_updated}</small></ListGroupItem>
          </ListGroup>
        </Panel>
      </Wrapper>
    )
  }
}

CoinsShow.propTypes = {}


const Wrapper = styled.div`
  margin: 25px 40px;
`

const mapStateToProps = (state, ownProps) => {
  return {
    coin: state.coin.coin
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getCoinRequest: bindActionCreators( actions.getCoinRequest, dispatch)
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(CoinsShow)
```
## Router setting
Finally you set up routing.
### CoinsIndex
Open the `src/containers/CoinsIndex.jsx`

import react-router lib.

```js
import { Link } from 'react-router';
```

In `coins.map()` from

```js
<td>{name}</td>
```
to
```js
<td><Link to={`/coins/${id}`}>{name}</Link></td>
```

### routes.jsx
Open the `src/routes.jsx`.
And update like this.
```js
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
```

That's all. Yeah! \
Please check it in your browser. \

Thank you for reading this tutorial.
