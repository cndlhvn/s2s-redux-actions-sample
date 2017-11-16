import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore(history, initialState) {

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      )
    )
  )
  sagaMiddleware.run(rootSaga)

  return store
}
