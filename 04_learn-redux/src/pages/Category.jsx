import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {changeBannersAction} from '../store/actions';

export class Category extends PureComponent {
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list;
      this.props.changeBanners(banners);
    });
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
  changeBanners: (banners) => dispatch(changeBannersAction(banners)),
});

export default connect(null, mapDispatchToProps)(Category);
