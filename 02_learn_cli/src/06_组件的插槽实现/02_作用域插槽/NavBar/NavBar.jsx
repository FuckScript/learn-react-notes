import React, {Component} from 'react';
import './nav-bar.css';

export class NavBar extends Component {
  listClick(index) {
    this.props.listClick(index);
  }

  render() {
    const {titles, currentIndex, navType} = this.props;

    return (
      <div>
        <ul>
          {titles.map((title, index) => {
            return (
              <li key={title} onClick={() => this.listClick(index)}>
                {/* 
                <span className={currentIndex === index ? 'active' : ''}>
                  {title}
                </span>
                 */}
                {navType(title)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavBar;
