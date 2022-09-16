import React, {PureComponent} from 'react';
import {withRouter} from '../hoc';

export class Detail extends PureComponent {
  render() {
    const {params} = this.props.router;
    return <div>Detail: {params.id}</div>;
  }
}

export default withRouter(Detail);
