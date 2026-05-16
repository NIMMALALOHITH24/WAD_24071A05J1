import React, { useState } from 'react'

function saveParcel(parcel) {
  const raw = localStorage.getItem('parcels')
  const arr = raw ? JSON.parse(raw) : []
  arr.push(parcel)
  localStorage.setItem('parcels', JSON.stringify(arr))
}

export default function ParcelBooking() {
  const [sender, setSender] = useState('')
  const [receiver, setReceiver] = useState('')
  const [pickup, setPickup] = useState('')
  const [delivery, setDelivery] = useState('')
  const [weight, setWeight] = useState('')
  const [confirmation, setConfirmation] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const trackingId = 'PKG' + Date.now()
    const parcel = {
      trackingId,
      sender,
      receiver,
      pickup,
      delivery,
      weight,
      createdAt: new Date().toISOString(),
      paid: false,
      status: 'Booked'
    }
    saveParcel(parcel)
    setConfirmation(parcel)
    setSender('')
    setReceiver('')
    setPickup('')
    setDelivery('')
    setWeight('')
  }

  return (
    <section>
      <h2>Book a Parcel</h2>
      {!confirmation ? (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Sender Name
            <input value={sender} onChange={e => setSender(e.target.value)} required />
          </label>
          <label>
            Receiver Name
            <input value={receiver} onChange={e => setReceiver(e.target.value)} required />
          </label>
          <label>
            Pickup Address
            <input value={pickup} onChange={e => setPickup(e.target.value)} required />
          </label>
          <label>
            Delivery Address
            <input value={delivery} onChange={e => setDelivery(e.target.value)} required />
          </label>
          <label>
            Weight (kg)
            <input value={weight} onChange={e => setWeight(e.target.value)} type="number" step="0.1" required />
          </label>
          <button type="submit">Book Parcel</button>
        </form>
      ) : (
        <div className="card">
          <h3>Booking Confirmed</h3>
          <p><strong>Tracking ID:</strong> {confirmation.trackingId}</p>
          <p><strong>Status:</strong> {confirmation.status}</p>
          <p>Use the tracking ID on the Track page.</p>
        </div>
      )}
    </section>
  )
}
