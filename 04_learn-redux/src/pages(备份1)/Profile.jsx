import React, {PureComponent} from 'react';
import store from '../store';
import {changeCountAction} from '../store/actions';

export class Profile extends PureComponent {
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
        <h4>Profile count: {count}</h4>
        <button onClick={() => store.dispatch(changeCountAction(5))}>+5</button>
      </div>
    );
  }
}

export default Profile;
