import { spawn, all } from 'redux-saga/effects'
import { watchGetScreen } from './app_sagas'

const rootSaga = function* () {
  yield all([spawn(watchGetScreen)])
}

export default rootSaga
