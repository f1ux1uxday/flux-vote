export function selectQuestion(question) {
  return {
    type: 'Q_SELECTED',
    payload: question,
  }
}

export function deselectQuestion() {
  return {
    type: 'Q_DESELECTED',
    payload: null,
  }
}
