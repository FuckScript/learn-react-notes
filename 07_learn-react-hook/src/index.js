import ReactDOM from 'react-dom/client'
import App from './12_redux中的hooks/App'
import { Provider } from 'react-redux'
import store from './12_redux中的hooks/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
