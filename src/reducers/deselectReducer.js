export default function(state, action) {
  switch (action.type) {
  case 'Q_DESELECTED':
    return action.payload
  }
  return state
}
