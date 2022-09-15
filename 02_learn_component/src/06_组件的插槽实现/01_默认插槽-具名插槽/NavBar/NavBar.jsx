import React, {Component} from 'react';
import './style.css';

export class NavBar extends Component {
  render() {
    /* 
      当传入的元素多于一个时, childran是一个数组
      当传入的元素为一个时, children就是这个元素
    */
    // 1.相当与"默认插槽"
    /*
      const {children} = this.props;
      return (
        <div className="nav-bar">
          <div className="left">{children[0]}</div>
          <div className="center">{children[1]}</div>
          <div className="right">{children[2]}</div>
        </div>
      ); 
    */

    // 2.相当于具名插槽
    const {leftSlot, centerSlot, rightSlot} = this.props;
    return (
      <div className="nav-bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    );
  }
}

export default NavBar;
