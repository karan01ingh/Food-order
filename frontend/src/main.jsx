// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {store} from "./store.js"
import { Provider } from 'react-redux'
// import ReactDOM from 'react-dom/client'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <App />
 </Provider>
  
  
  
)
