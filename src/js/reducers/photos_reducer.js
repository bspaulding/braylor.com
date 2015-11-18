import {
  DISMISS_FULLSCREEN_GUIDE
} from "../actions/photos_actions.js";

let initialState = {
  showFullscreenGuide: true
};

export default function(state, action) {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
  case DISMISS_FULLSCREEN_GUIDE:
    return {
      ...state,
      showFullscreenGuide: false
    };
  default:
    return state;
  }
}
