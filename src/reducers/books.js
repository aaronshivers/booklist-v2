export default (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_BOOK':
      return [ ...state, { action } ]
    default:
      return state
  }
}
