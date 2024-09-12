
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import UiComponents from './components/11-09-24tasks/UiComponents';
import LocalStorageComponents from './components/11-09-24tasks/LocalStorageComponents';
import NetWorkComponent from './components/11-09-24tasks/NetWorkComponent';
import LatLogComponent from './components/11-09-24tasks/LatLogComponent';

const App = () => {
  return (
    <div>

   <UiComponents/>
   <hr />
   <LocalStorageComponents/>
   <hr />
   <NetWorkComponent/>
    <hr />
   <LatLogComponent/>
    </div>
  )
}

export default App
