import { Outlet } from "react-router-dom"
import Navbar from "./componenets/Navbar"
import Footer from "./componenets/Footer"


function App() {

  return (
    <>
      <Navbar />   
      <Outlet />
      <Footer />
    </>
  )
}

export default App
