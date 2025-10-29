import MainHeader from "./MainHeader"
import Footer from "./Footer"
import StickySidebar from "./StickySidebar"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <>
      <MainHeader/>
      <StickySidebar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout