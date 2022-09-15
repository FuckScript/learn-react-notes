import React, {PureComponent, createContext} from 'react';

const ThemeContext = createContext();

function withTheme(OriginComponent) {
  return function (props) {
    return (
      <ThemeContext.Consumer>
        {(value) => <OriginComponent {...value} {...props} />}
      </ThemeContext.Consumer>
    );
  };
}

const Hello = withTheme(function (props) {
  return <h4 style={{color: props.color}}>Hello Qiyana</h4>;
});

export class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color: 'red'}}>
          <Hello />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
