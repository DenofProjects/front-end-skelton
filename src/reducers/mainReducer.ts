import { Reducer } from "redux";
import mainActionTypes from "../actionTypes/mainActionTypes";
import { mainDTO } from "../DTOs/mainDTO";

const initialState: mainDTO = {
  count: 0,
};

const mainReducer: Reducer<mainDTO> = (
  state = initialState,
  action
) => {
  const newState = { ...state };
  switch (action.type) {
    case mainActionTypes.INCRIMENT: {
      newState.count++;
      return newState;
    }

    case mainActionTypes.DECRIMENT: {
      newState.count--;
      return newState;
    }

    default: {
      return newState;
    }
  }
};

export default mainReducer;
