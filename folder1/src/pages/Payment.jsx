import React, { useState } from 'react'

function getParcels() {
  const raw = localStorage.getItem('parcels')
  return raw ? JSON.parse(raw) : []
}

function saveParcels(arr) {
  localStorage.setItem('parcels', JSON.stringify(arr))
}

export default function Payment() {
  const [id, setId] = useState('')
  const [message, setMessage] = useState('')

  function handlePay(e) {
    e.preventDefault()
    const arr = getParcels()
    const idx = arr.findIndex(p => p.trackingId === id.trim())
    if (idx === -1) {
      setMessage('Parcel not found')
      return
    }
    arr[idx].paid = true
    arr[idx].status = 'Payment received'
    saveParcels(arr)
    setMessage('Payment successful — status updated')
  }

  return (
    <section>
      <h2>Payment</h2>
      <form onSubmit={handlePay} className="form-inline">
        <input placeholder="Enter tracking id" value={id} onChange={e => setId(e.target.value)} />
        <button type="submit">Pay</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  )
}
