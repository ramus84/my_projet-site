import React from 'react'
import { Link } from 'react-router-dom'


function Admin() {
  return (
    <div>Admin
        
    <nav>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/gestiontrajet">Gestion trajet</Link>
    </nav>
    
    </div>
  )
}

export default Admin