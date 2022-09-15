import React, {PureComponent} from 'react';

function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime();
    }

    componentDidMount() {
      this.endTime = new Date().getTime();
      const interval = this.endTime - this.beginTime;
      console.log(
        `当前${OriginComponent.name}页面花费了${interval}ms渲染完成!`
      );
    }

    render() {
      return <OriginComponent {...this.props} />;
    }
  };
}

const Detail = logRenderTime(function Detail() {
  return <div>Detail Component</div>;
});

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Detail />
      </div>
    );
  }
}

export default App;
