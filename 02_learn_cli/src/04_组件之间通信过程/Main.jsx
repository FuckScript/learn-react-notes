import React, {Component} from 'react';
import axios from 'axios';
import MainBanner from './MainBanner';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: [],
    };
  }

  render() {
    const {banners} = this.state;

    return (
      <div>
        <MainBanner banners={banners} />
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(({data}) => {
      this.setState({banners: data.data.banner.list});
    });
  }
}

export default Main;
