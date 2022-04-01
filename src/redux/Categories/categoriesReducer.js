const Message = 'Under Construction';

export const categoriesMessage = (payload) => ({
  type: Message,
  payload,
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case Message:
      return [state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
