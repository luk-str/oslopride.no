import { call, put, takeLeading } from "redux-saga/effects";
import {
  createAction,
  webResponseFailure,
  webResponseInitial,
  webResponseRequest,
  webResponseSuccess
} from "../helpers";
import sanity from "../sanity";

const REQUEST_PRIDE_PARK_CONTENT = "REQUEST_PRIDE_PARK_CONTENT";
const SUCCESS_PRIDE_PARK_CONTENT = "SUCCESS_PRIDE_PARK_CONTENT";
const FAILURE_PRIDE_PARK_CONTENT = "FAILURE_PRIDE_PARK_CONTENT";

export const prideParkActions = {
  request: () => createAction(REQUEST_PRIDE_PARK_CONTENT, webResponseRequest()),
  success: data =>
    createAction(SUCCESS_PRIDE_PARK_CONTENT, webResponseSuccess(data)),
  failure: error =>
    createAction(FAILURE_PRIDE_PARK_CONTENT, webResponseFailure(error))
};

const initialState = webResponseInitial();

export const prideParkReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PRIDE_PARK_CONTENT:
    case FAILURE_PRIDE_PARK_CONTENT:
    case SUCCESS_PRIDE_PARK_CONTENT:
      return action.payload;
    default:
      return state;
  }
};

export const getPridePark = () => sanity.getDocument("global-pride-park");

function* fetchPridePark() {
  try {
    const response = yield call(getPridePark);
    yield put(prideParkActions.success(response));
  } catch (e) {
    yield put(prideParkActions.failure(`${e}`));
  }
}

export function* prideParkSaga() {
  yield takeLeading(REQUEST_PRIDE_PARK_CONTENT, fetchPridePark);
}