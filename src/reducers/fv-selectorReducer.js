export default function(state = null, action) {
  switch (action.type) {
  case 'Q_SELECTED':
    return action.payload
  case 'Q_DESELECTED':
    return action.payload
  }
  return state
}
