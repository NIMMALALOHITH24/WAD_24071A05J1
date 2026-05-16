import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // Simple mock auth
    if (email && password) {
      localStorage.setItem('token', 'mock-token')
      navigate('/')
    } else {
      alert('Provide email and password')
    }
  }

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
        </label>
        <label>
          Password
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </section>
  )
}
