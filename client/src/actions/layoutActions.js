import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ACTIVE_COMPONENT,
  IS_CREATED,
  SHOW_SIDE_MENU,
} from "../constants/layoutConstants";

export const set = (bool) => (dispatch) => {
  dispatch({ type: SHOW_SIDE_MENU, payload: bool });
};
export const setActive = (title) => (dispatch) => {
  dispatch({ type: ACTIVE_COMPONENT, payload: title });
};
export const setIsCreated = (data) => (dispatch) => {
  dispatch({ type: IS_CREATED, payload: data });
};
