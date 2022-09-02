import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MainBanner extends Component {
  // 默认值: 方式2
  static defaultProps = {
    banners: [],
    title: '默认值',
  };

  render() {
    const {banners} = this.props;

    return (
      <div>
        <h4>轮播图</h4>
        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// 限定类型
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.array,
};

// 默认值: 方式1
// MainBanner.defaultProps = {
//   banners: [],
//   title: '默认值',
// };

export default MainBanner;
