import React, {Component} from 'react';
import NavBar from './NavBar/NavBar';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ['流行', '新歌', '精选'],
      currentIndex: 0,
    };
  }

  changeIndex(index) {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    const {titles, currentIndex} = this.state;

    return (
      <div>
        <NavBar
          titles={titles}
          currentIndex={currentIndex}
          listClick={(index) => this.changeIndex(index)}
          navType={(text) => <button>{text}</button>}
        />
        <p>{titles[currentIndex]}</p>
      </div>
    );
  }
}

export default App;
