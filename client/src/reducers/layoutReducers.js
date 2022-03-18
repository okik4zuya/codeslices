import {
  SHOW_SIDE_MENU,
  ACTIVE_COMPONENT,
  IS_CREATED,
} from "../constants/layoutConstants";

export const dashboardReducer = (
  state = { showSideMenu: true, active: "Overview", isCreated: false },
  action
) => {
  switch (action.type) {
    case SHOW_SIDE_MENU:
      return { showSideMenu: action.payload };
    case ACTIVE_COMPONENT:
      return { ...state, active: action.payload };
    case IS_CREATED:
      return { ...state, isCreated: action.payload };

    default:
      return state;
  }
};
