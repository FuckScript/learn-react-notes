import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <h4>您访问的路径不存在, 请检查</h4>
        <Link to="/home">返回首页</Link>
      </div>
    )
  }
}

export default NotFound