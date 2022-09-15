import React, {Component} from 'react';
import './nav-bar.css';

export class NavBar extends Component {
  listClick(index) {
    this.props.listClick(index);
  }

  render() {
    const {titles, currentIndex} = this.props;

    return (
      <div>
        <ul>
          {titles.map((title, index) => {
            return (
              <li key={title} onClick={() => this.listClick(index)}>
                <span className={currentIndex === index ? 'active' : ''}>
                  {title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavBar;
