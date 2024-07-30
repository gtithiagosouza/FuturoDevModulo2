import { Link } from "react-router-dom"


function Sidebar() {
  return (
      <>
        <div className="sidebar">
         <h2>Empresa XYZ</h2>
         <h4>Menu</h4>
         <Link to='/Overview'> Overview</Link>
         <Link to='/Sensores'> Sensores</Link>
         <Link to='/Locais'> Locais</Link>
         </div>
         </>
  )
}

export default Sidebar