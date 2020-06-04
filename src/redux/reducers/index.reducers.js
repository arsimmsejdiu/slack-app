import * as actionTypes from "../actions/types.actions";
import { combineReducers } from "redux";

// Global States
const initialUserState = {
  currentUser: null,
  isLoading: true,
};

const initialChannelState = {
  currentChannel: null,
  isPrivateChannel: false,
  userPosts: null,
};

const initialColorsState = {
  primaryColor: "#4c3c4c",
  secondaryColor: "#eee",
};

/* Colors Reducer */
const colorsReducer = (state = initialColorsState, action) => {
  switch (action.type) {
    case actionTypes.SET_COLORS:
      return {
        primaryColor: action.payload.primaryColor,
        secondaryColor: action.payload.secondaryColor,
      };
    default:
      return state;
  }
};

/* User Reducer */
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

/* Channel Reducer */
const channelReducer = (state = initialChannelState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel,
      };
    case actionTypes.SET_PRIVATE_CHANNEL:
      return {
        ...state,
        isPrivateChannel: action.payload.isPrivateChannel,
      };
    case actionTypes.SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload.userPosts,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  user: userReducer,
  channel: channelReducer,
  colors: colorsReducer,
});

export default rootReducers;
