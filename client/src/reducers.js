const defaultState = {
  events: [],
  loading: false
  //
}
function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'GET_EVENTS_REQUEST':
    case 'CREATE_EVENT_REQUEST':
    return Object.assign({}, state, {loading: true})

    case 'GET_EVENTS_SUCCESS':
    return Object.assign({}, state, {events: action.response, loading: false})

    case 'GET_EVENTS_FAILURE':
    case 'CREATE_EVENT_SUCCESS':
    case 'CREATE_EVENT_FAILURE':
    return Object.assign({}, state, {loading: false})

    default:

  }

  return state
}


export default reducer
