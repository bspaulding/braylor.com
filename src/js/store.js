import { routerStateReducer } from 'redux-router';
import {
  combineReducers,
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import createLogger from "redux-logger";
import photosReducer from "./reducers/photos_reducer.js";
import routes from "./components/routes.jsx";

const reducer = combineReducers({
  router: routerStateReducer,
  photos: photosReducer
});

export function makeStore(reduxReactRouter, createHistory, middleware = (x) => x) {
  return compose(
    // devTools()
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(reducer);
}
