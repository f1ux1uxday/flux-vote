import axios from 'axios'

export function userLogin() {
  return {
    type: 'USER_LOGGED',
    payload: null,
  }
}

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

export function recentQuestions() {
  let recentQs = axios.get('/api/recent')
  return {
    type: 'GET_RECENT',
    payload: recentQs,
  }
}
