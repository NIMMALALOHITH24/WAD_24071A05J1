import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">Courier</Link>
      </div>
      <nav className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/book">Book Parcel</Link>
        <Link to="/track">Track</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/contact">Contact</Link>
        {token ? (
          <button className="link-button" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  )
}
