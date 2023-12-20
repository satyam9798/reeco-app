import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Routes from './routes';
import store from './store/store'
import './index.css'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Routes />
    </Provider>
  </React.StrictMode>,
)
