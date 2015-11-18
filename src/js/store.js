import { createHistory } from "history";
import {
  reduxReactRouter,
  routerStateReducer,
  ReduxRouter
} from 'redux-router';
import {
  combineReducers,
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import routes from "./components/routes.jsx";

const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
  // applyMiddleware(m1, m2, m3),
  reduxReactRouter({
    routes,
    createHistory
  }),
  // devTools()
)(createStore)(reducer);

export default store;
