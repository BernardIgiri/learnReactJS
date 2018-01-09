import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
	thunk,
	routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
	middleware.push(createLogger())
	const devToolsExtension = window.devToolsExtension
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

export const store = createStore(
	reducers,
	initialState,
	composedEnhancers
)
