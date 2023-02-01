import * as dopsReducerActions from "../../reducerActions/mainReducerActions";
import denOfProjectsReducer from "../../reducers/mainReducer";

describe("Test initial state for incriment", () => {
  test("Is doing nothing for default case", () => {
    const action = { type: "ANYTHING_TO_SWITCH_TO_DEFAULT_CASE" };
    const initialState = { count: 0 };

    expect(denOfProjectsReducer(undefined, action)).toEqual(initialState);
  });
});

describe("Test incriment", () => {
  test("Should test incriment", () => {
    const action = dopsReducerActions.incriment();
    const expectedState = { count: 1 };

    expect(denOfProjectsReducer(undefined, action)).toEqual(expectedState);
  });
});
