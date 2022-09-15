import ThemeContext from './context/theme-content';

function HomeBanner() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(value) => <h2 style={{color: value.color}}>HomeBanner</h2>}
      </ThemeContext.Consumer>
    </div>
  );
}

export default HomeBanner;
