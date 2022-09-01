import React, {Component} from 'react';

export class MainBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, banners} = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <ul>
          {banners.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MainBanner;
