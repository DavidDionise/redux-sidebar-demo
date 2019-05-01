const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_AGE = "UPDATE_AGE";

export default function person(
  state = {
    name: "",
    age: ""
  },
  action
) {
  switch (action.type) {
    case UPDATE_NAME: {
      return {
        ...state,
        name: action.payload
      };
    }
    case UPDATE_AGE: {
      return {
        ...state,
        age: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const updateName = name => ({ type: UPDATE_NAME, payload: name });
export const updateAge = age => ({ type: UPDATE_AGE, payload: age });
