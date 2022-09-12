import ReactDOM from 'react-dom/client';
import App from './实现connect、Provider/App';
import store from './实现connect、Provider/store';
import {Provider} from './实现connect、Provider/component/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
