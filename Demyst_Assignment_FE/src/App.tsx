import {Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify"

import Application from "./pages/Application"
import ApplicationForm from "./pages/ApplicationForm"
import BalanceSheetReview from "./pages/BalanceSheetReview"
import ApplicationOutcome from "./pages/ApplicationOutcome"

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <main className="w-screen h-screen font-Inter">
      <Routes>
        <Route path="/" element={<Application/>}/>
        <Route path="/application-form" element={<ApplicationForm/>}/>
        <Route path="/review-balance-sheet" element={<BalanceSheetReview/>}/>
        <Route path="/outcome" element={<ApplicationOutcome/>}/>
      </Routes>
    </main>
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="light"
    />
    </>
  )
}

export default App
