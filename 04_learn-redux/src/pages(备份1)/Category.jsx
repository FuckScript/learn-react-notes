import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
// import {changeBannersAction} from '../store/actions';
import {fetchBannersAction} from '../store/actions'

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchBanners()
  }

  render() {
    return (
      <div>
        <h4>Category Page</h4>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // changeBanners: (banners) => dispatch(changeBannersAction(banners)),
  fetchBanners: () => dispatch(fetchBannersAction()),
});

export default connect(null, mapDispatchToProps)(Category);
