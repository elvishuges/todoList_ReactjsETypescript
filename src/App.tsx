import './App.css';
import 'antd/dist/antd.css';
import React from 'react'
import AppRoutes from "./routes";


const App: React.FC<{}> = () => {


  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  )
}

export default App;
