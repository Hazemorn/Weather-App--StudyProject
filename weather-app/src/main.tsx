import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import './assets/styles/_reset.scss'
import './assets/styles/_vars.scss'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './store/store.ts'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </StrictMode>,
)
