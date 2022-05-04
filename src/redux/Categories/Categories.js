const CHECK_STATUS = 'bookstore/categoires/CHECK_STATUS';
const initialData = [];

export const addCategory = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ': Under Construction! Please Come Back Later.';
    default:
      return state;
  }
};

export default categoriesReducer;
