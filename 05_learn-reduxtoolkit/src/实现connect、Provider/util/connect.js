import {PureComponent} from 'react';
import {StoreContext} from '../component/Provider';

function connect(mapState, mapDispatch) {
  return function (Component) {
    class EnhancersComponent extends PureComponent {
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({...mapState(this.context.getState())});
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <Component
            {...this.props}
            {...mapState(this.context.getState())}
            {...mapDispatch(this.context.dispatch)}
          />
        );
      }
    }

    EnhancersComponent.contextType = StoreContext;
    return EnhancersComponent;
  };
}

export default connect;
