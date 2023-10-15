import './App.css'
import './styles/text.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderPage } from './pages/header/index_header'
import Footer from './footer'
import Home from './pages/home/index_home'
import Gallery from './pages/galer/index_galer'
import Karta from './pages/kart_map/index_kart_map'
import Zone from './pages/zones/index_zone'
import Contact from './pages/contacts/index_contacts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/galer'} element={<Gallery />} />
          <Route path={'/map'} element={<Karta />} />
          <Route path={'/zones'} element={<Zone />} />
          <Route path={'/Contact'} element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App