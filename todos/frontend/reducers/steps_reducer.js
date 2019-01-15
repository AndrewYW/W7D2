import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_STEPS:
      return Object.assign({}, action.steps);
    case RECEIVE_STEP:
      return ({ ...state, [action.step.id]: action.step });
    case REMOVE_STEP:
      const newSteps = Object.assign({}, state);
      delete (newSteps[action.step.id]);
      return newSteps;
    default:
      return state;
  }
};

export default stepsReducer;