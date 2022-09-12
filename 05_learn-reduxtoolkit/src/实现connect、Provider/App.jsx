import React, {PureComponent} from 'react';
import connect from './util/connect';
import {changeCount} from './store/features/counter';

export class App extends PureComponent {
  render() {
    const {count, changeCount} = this.props;
    return (
      <div>
        <h4>App Count: {count}</h4>
        <button onClick={() => changeCount(5)}>+5</button>
      </div>
    );
  }
}

const mapState = (state) => ({count: state.counter.count});
const mapDispatch = (dispatch) => ({
  changeCount: (count) => dispatch(changeCount(count)),
});

export default connect(mapState, mapDispatch)(App);
