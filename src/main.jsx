import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { StoreData } from './components/16-09-24tasks/store/StoreComponents.js';
import CountryComponents from './components/18-09-24-tasks/CountryComponents.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={StoreData}>
      <CountryComponents/>
    </Provider>
  </StrictMode>,
);
