import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function Home() {
  return (
      <>
         <Sidebar />
          <h1>Home</h1>
          <Link to='/bicicletas'> Bicicletas</Link>
          <Link to='/login'> Login</Link>
      </>
  )
}

export default Home