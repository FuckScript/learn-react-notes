import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {changeCount} from './store/features/counter';
import {fetchBannersAction} from './store/features/banners';

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
  changeCount: (count) => dispatch(changeCount(count)),
  fetchBanners: () => dispatch(fetchBannersAction()),
});

export default connect(mapState, mapDispatch)(App);
