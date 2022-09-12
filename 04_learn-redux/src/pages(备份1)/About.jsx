import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {changeCountAction} from '../store/actions';

export class About extends PureComponent {
  changeCount(num) {
    this.props.changeCount(num);
  }

  render() {
    const {count, banners} = this.props;
    return (
      <div>
        <h4>About: {count}</h4>
        <button onClick={() => this.changeCount(10)}>+10</button>

        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  banners: state.banners,
});
const mapDispatchToProps = (dispatch) => ({
  changeCount: (num) => dispatch(changeCountAction(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
