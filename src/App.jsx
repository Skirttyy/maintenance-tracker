import { useState } from 'react'
import './App.css'
import Header from './pages/general/Header'
import Form from './pages/maintenance-creator/components/Form'
import Footer from './pages/general/Footer'
import FormProvider from './pages/maintenance-creator/context/FormContext'
import View from './pages/maintenance-list/components/View'
import ViewFavorites from './pages/maintenance-favorites/ViewFavorites'

function App() {
  const [page, setPage] = useState("add")
  return (
    <>
      <Header selectedPage={page} setPageHandler={setPage}/>
      <FormProvider>
        {page === "add" && <Form />}
        {page === "view" && <View />}
        {page === "favorites" && <ViewFavorites />}
      </FormProvider>
      <Footer />
    </>
  )
}

export default App
