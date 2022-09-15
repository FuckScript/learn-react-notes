import React, {PureComponent} from 'react';
import {Link, Outlet} from 'react-router-dom';

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h4>Home Page</h4>
        <Link to="/home/banner">轮播图</Link>
        <Link to="/home/produce">商品列表</Link>

        <Outlet />
      </div>
    );
  }
}

export default Home;
