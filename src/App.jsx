import { Outlet } from "react-router-dom"
import Navbar from "./componenets/Navbar"


function App() {

  return (
    <>
      <Navbar />   
      <Outlet />
    </>
  )
}

export default App
