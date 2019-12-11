const InitialState = {
  users: [],
  username: ""
};

const reducer = (state = InitialState, action) => {
  if (action.type === "Adding_user") {
    return {
      ...state,
      users: state.users.concat(action.payload),
    };
  } else if (action.type === "Adding_username") {
    return {
      ...state,
      username: action.payload
    };
  }
  return state;
};



export default reducer;
