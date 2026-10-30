import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./componenets/Navbar"
import Footer from "./componenets/Footer"
import "./App.css"

function App() {

  return (
    <>
      <ScrollRestoration />
      <Navbar />   
      <Outlet />
      <Footer />
    </>
  )
}

export default App
