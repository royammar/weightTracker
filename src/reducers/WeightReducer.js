
export default function (state, action = {}) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: [...action.savedData] };
    case 'SET_UPDATED':
      return { ...state, data: [...action.updatedItems] };
    case 'ADD_ITEM':
      return { ...state, data: [...state.data,action.itemToAdd] };
    case 'DELETE_ITEM':
      return {
        ...state, data: state.data.filter(item => {
          return item.date !== action.itemToDelete.date
        })
      };
    default:
      return state;
  }
}
