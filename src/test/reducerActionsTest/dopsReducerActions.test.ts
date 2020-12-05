import * as dopsActions from "../../reducerActions/denOfProjectsReducerActoins";
import denOfProjectsActionTypes from "../../actionTypes/denOfProjectsActionTypes";

describe("actions", () => {
  it("should incriment count value", () => {
    const expectedAction = {
      type: denOfProjectsActionTypes.INCRIMENT,
    };
    expect(dopsActions.incriment()).toEqual(expectedAction);
  });
});
