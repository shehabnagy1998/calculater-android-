import { all, takeEvery, put } from 'redux-saga/effects';

function* changeScreenAsync(action) {
    yield put({ type: 'CHANGE_SCREEN_ASYNC', val: action.val });
}
function* watchChangeScreen() {
    yield takeEvery('CHANGE_SCREEN', changeScreenAsync);
}

function* changeResaultAsync(action) {
    yield put({ type: 'CHANGE_RESAULT_ASYNC', val: action.val });
}
function* watchChangeResault() {
    yield takeEvery('CHANGE_RESAULT', changeResaultAsync);
}

function* changeOprAsync(action) {
    yield put({ type: 'CHANGE_OPR_ASYNC', val: action.val });
}
function* watchOprResault() {
    yield takeEvery('CHANGE_OPR', changeOprAsync);
}

export default function* rootSaga() {
    yield all([
        watchChangeScreen(),
        watchChangeResault(),
        watchOprResault()
    ])
}