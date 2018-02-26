export function selectQuestion(question) {
  return {
    type: 'Q_SELECTED',
    payload: question,
  }
}
