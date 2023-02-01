import { decriment, incriment } from "../reducerActions/mainReducerActions";

export const mapStateToProps = (state: any) => {
  return { mainState: state.mainReducerState };
};

export function mapDispatchToProps(dispatch: any) {
  return {
    onDecrimentClick: () => {
      dispatch(decriment());
    },

    onIncrimentClick: ()=> {
        dispatch(incriment());
    }
  };
}
