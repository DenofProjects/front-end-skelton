import denOfProjectsActionTypes from "../actionTypes/denOfProjectsActionTypes";

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
