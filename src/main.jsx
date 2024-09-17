import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/16-09-24tasks/redux-Components/ButtonComponent.jsx';
import { Provider } from 'react-redux';
import { StoreData } from './components/16-09-24tasks/store/StoreComponents.js';

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Provider store={StoreData}>
    <ButtonComponent/>
    </Provider>
  </StrictMode>,
)
