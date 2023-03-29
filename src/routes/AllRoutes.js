import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Admin, ProductDetail, ProductList, Contact, ContactUs, ContactEu, ContactKo, PageNotFound } from '../pages'

export const AllRoutes = () => {
  const isRegisteredUser = true

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<ProductList />} />
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='contact' element={<Contact />}>
          <Route path='us' element={<ContactUs />} />
          <Route path='ko' element={<ContactKo />} />
          <Route path='eu' element={<ContactEu />} />
        </Route>
        <Route path='admin' element={isRegisteredUser ? <Admin /> : <Navigate to='/' />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}
