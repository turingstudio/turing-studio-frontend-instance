import { put, call, takeLatest } from 'redux-saga/effects'
import API from './api'
import { actionSuccess, actionError } from './actions'
import { GET_SCREEN } from './action_types'

export const getScreen = function* (action) {
  const { type } = action
  try {
    const data = yield call(API.getScreen, action.data)
    yield put(actionSuccess(data, type))
  } catch (error) {
    yield put(actionError(error, type))
  }
}
export const watchGetScreen = function* () {
  yield takeLatest(GET_SCREEN, getScreen)
}
