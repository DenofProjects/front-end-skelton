import React from "react";
import { connect } from "react-redux";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../viewConnectors/vcMain";

interface MainViewProps {
  readonly mainState: any;
  readonly onIncrimentClick: () => void;
  readonly onDecrimentClick: () => void;
}

class Main extends React.Component<MainViewProps> {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {this.props.mainState.count}
        <button onClick={this.props.onIncrimentClick}>+</button>
        <button onClick={this.props.onDecrimentClick}>-</button>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
