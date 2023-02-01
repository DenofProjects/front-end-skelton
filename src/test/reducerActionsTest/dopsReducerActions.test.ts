import * as dopsActions from "../../reducerActions/mainReducerActions";
import denOfProjectsActionTypes from "../../actionTypes/mainActionTypes";

describe("actions", () => {
  it("should incriment count value", () => {
    const expectedAction = {
      type: denOfProjectsActionTypes.INCRIMENT,
    };
    expect(dopsActions.incriment()).toEqual(expectedAction);
  });
});
