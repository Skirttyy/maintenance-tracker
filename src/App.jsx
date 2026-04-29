import './App.css'
import Header from './pages/general/Header'
import Form from './pages/maintenance-creator/components/Form'
import Footer from './pages/general/Footer'
import FormProvider from './pages/maintenance-creator/context/FormContext'
import View from './pages/maintenance-list/components/View'
import ViewFavorites from './pages/maintenance-favorites/ViewFavorites'
import Layout from './pages/layouts/Layout'
import { Route, Routes } from 'react-router'
import Home from './pages/general/Home'
import FormsLayout from './pages/layouts/FormsLayout'
import NotFound from './pages/general/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/add" element={<FormsLayout />}>
              <Route path="/add/step/:stepNumber" element={<Form />}/>
          </Route>
          <Route path='/view' element={<View />}/>
          <Route path='/favorites' element={<ViewFavorites />}/> 
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
