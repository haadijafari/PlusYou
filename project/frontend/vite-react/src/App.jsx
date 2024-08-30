import './App.css'
import { Navigate, Route, Routes ,BrowserRouter} from 'react-router-dom'
import React from 'react'
import 'vite/modulepreload-polyfill'


import CoffeeShop from './Components/CoffeeShop'
import Layout from './Layout/Layout'
import Contactus from './Components/Contactus'

function App() {
  
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', 'fa');
    document.documentElement.setAttribute('dir', 'rtl');
  }, []);
  return (
    <div className="Bdiv"> 
      <Layout>
      <CoffeeShop />
      <Contactus />
      </Layout>
    </div>
  )
}

export default App
