const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export default function ui(
  state = {
    sidebarOpen: false
  },
  action
) {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        sidebarOpen: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const toggleSidebar = bool => ({ type: TOGGLE_SIDEBAR, payload: bool });
