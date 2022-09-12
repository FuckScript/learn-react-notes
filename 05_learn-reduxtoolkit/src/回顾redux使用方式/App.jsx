import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {changeCountAction, fetchBanners} from '../store/counter';

export class App extends PureComponent {
  componentDidMount() {
    this.props.fetchBanners();
  }

  render() {
    const {count, banners, changeCount} = this.props;
    return (
      <div>
        <h4>App Count: {count}</h4>
        <button onClick={() => changeCount(5)}>+5</button>
        <ul>{banners.map((item) => <li key={item.acm}>{item.title}</li>)}</ul>
      </div>
    );
  }
}

const mapState = (state) => ({
  count: state.counter.count,
  banners: state.banners.banners,
});
const mapDispatch = (dispatch) => ({
  changeCount: (count) => dispatch(changeCountAction(count)),
  fetchBanners: () => dispatch(fetchBanners()),
});

export default connect(mapState, mapDispatch)(App);
