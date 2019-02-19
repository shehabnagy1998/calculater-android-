import { all, takeEvery, put } from 'redux-saga/effects';

function* changeScreenAsync(action) {
    yield put('CHANGE_SCREEN_ASYNC', action.val);
}
function* watchChangeScreen() {
    yield takeEvery('CHANGE_SCREEN', changeScreenAsync);
}

function* changeResaultAsync(action) {
    yield put('CHANGE_Resault_ASYNC', action.val);
}
function* watchChangeResault() {
    yield takeEvery('CHANGE_Resault', changeResaultAsync);
}

export default function* rootSaga() {
    yield all([
        watchChangeScreen(),
        watchChangeResault()
    ])
}