import React, {Component} from 'react';

export class MainProductList extends Component {
  render() {
    const {productList} = this.props;

    return (
      <div>
        <h4>商品列表</h4>
        <ul>
          {productList.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MainProductList;
