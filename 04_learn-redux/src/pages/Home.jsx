import React, {PureComponent} from 'react';
import store from '../store';
import {changeCountAction} from '../store/actions';

export class Home extends PureComponent {
  constructor() {
    super();
    this.state = {count: store.getState().count};
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({count: store.getState().count});
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {count} = this.state;

    return (
      <div>
        <h4>Home count: {count}</h4>
        <button onClick={() => store.dispatch(changeCountAction(1))}>+1</button>
      </div>
    );
  }
}

export default Home;
