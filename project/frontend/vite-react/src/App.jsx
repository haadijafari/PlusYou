import './App.css'
import { Navigate, Route, Routes ,BrowserRouter} from 'react-router-dom'
import React from 'react'
import 'vite/modulepreload-polyfill'


import CoffeeShop from './Components/CoffeeShop'
import Layout from './Layout/Layout'
import AboutUs from './Pages/AboutUs'
import Introduction from './Pages/Introduction'
// import Rules from './Pages/Rules'
// import Complaint from './Pages/Complaint'

function App() {
  
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', 'fa');
    document.documentElement.setAttribute('dir', 'rtl');
  }, []);
  return (
    <> 
    
      <BrowserRouter>
      <Layout>
      <Routes>
      <Route index element={<Navigate to="/menu" replace />} />
      <Route path='/menu' element={<CoffeeShop />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/introduction' element={<Introduction />} />
      {/* <Route path='/rules' element={<Rules />} /> */}
      {/* <Route path='/complaint' element={<Complaint />}/> */}
      </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
