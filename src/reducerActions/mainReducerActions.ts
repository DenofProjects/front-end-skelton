import denOfProjectsActionTypes from "../actionTypes/mainActionTypes";

export function incriment() {
  return {
    type: denOfProjectsActionTypes.INCRIMENT,
  };
}

export function decriment() {
  return {
    type: denOfProjectsActionTypes.DECRIMENT,
  };
}
