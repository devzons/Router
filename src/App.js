import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { ProductList } from './components/ProductList'
import { ProductDetail } from './components/ProductDetail'
import { Contact } from './components/Contact'
import { Admin } from './components/Admin'
import { PageNotFound } from './components/PageNotFound'
import { ContactUs } from './components/ContactUs'
import { ContactKo } from './components/ContactKo'
import { ContactEu } from './components/ContactEu'

import './App.css'

function App() {
  const isUser = true

  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<ProductList />} />
          <Route path='products/:id' element={<ProductDetail />} />
          <Route path='contact' element={<Contact />}>
            <Route path='us' element={<ContactUs />} />
            <Route path='ko' element={<ContactKo />} />
            <Route path='eu' element={<ContactEu />} />
          </Route>
          <Route path='admin' element={isUser ? <Admin /> : <Navigate to='/' />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
