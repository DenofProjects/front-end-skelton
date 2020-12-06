import { Reducer } from "redux";
import denOfProjectsActionTypes from "../actionTypes/denOfProjectsActionTypes";
import { denOfProjectsDTO } from "../DTOs/denOfProjectsDTO";

const initialState: denOfProjectsDTO = {
  count: 0,
};

const denOfProjectsReducer: Reducer<denOfProjectsDTO> = (
  state = initialState,
  action
) => {
  const newState = { ...state };
  switch (action.type) {
    case denOfProjectsActionTypes.INCRIMENT: {
      newState.count++;
      return newState;
    }

    case denOfProjectsActionTypes.DECRIMENT: {
      newState.count--;
      return newState;
    }

    default: {
      return newState;
    }
  }
};

export default denOfProjectsReducer;
