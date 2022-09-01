import React, {Component} from 'react';

export class MainBanners extends Component {
  render() {
    const {banners} = this.props;
    console.log(banners);

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

export default MainBanners;
