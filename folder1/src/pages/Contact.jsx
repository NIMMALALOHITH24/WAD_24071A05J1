import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // In a real app, send to backend
    setSent(true)
    setName('')
    setEmail('')
    setMsg('')
  }

  return (
    <section>
      <h2>Contact Us</h2>
      {!sent ? (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name
            <input value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label>
            Email
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
          </label>
          <label>
            Message
            <textarea value={msg} onChange={e => setMsg(e.target.value)} required />
          </label>
          <button type="submit">Send</button>
        </form>
      ) : (
        <p>Thanks! Your message has been recorded (local demo).</p>
      )}
    </section>
  )
}
