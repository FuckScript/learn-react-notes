import React, {PureComponent} from 'react';
import {withRouter} from '../hoc';

export class HomeProduce extends PureComponent {
  constructor() {
    super();
    this.state = {
      produce: [
        {id: 1, message: 'Qiyana'},
        {id: 2, message: 'Kiana'},
      ],
    };
  }

  navigateTo(id) {
    const {navigate} = this.props.router;
    navigate(`/detail/${id}`);
  }

  render() {
    const {produce} = this.state;
    return (
      <div>
        <h4>商品列表</h4>
        <ul>
          {produce.map((item) => (
            <li key={item.id} onClick={() => this.navigateTo(item.id)}>
              {item.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomeProduce);
