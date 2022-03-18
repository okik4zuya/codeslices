import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "../reducers/userReducers";
import {
  noteCreateReducer,
  noteListReducer,
  noteUpdateReducer,
  noteDeleteReducer,
} from "../reducers/noteReducers";
import { dashboardReducer } from "../reducers/layoutReducers";

const reducer = combineReducers({
  // List of reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
  userUpdate: userUpdateReducer,
  dashboard: dashboardReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
