import React, { useState } from 'react'

function findParcel(id) {
  const raw = localStorage.getItem('parcels')
  const arr = raw ? JSON.parse(raw) : []
  return arr.find(p => p.trackingId === id)
}

export default function Tracking() {
  const [id, setId] = useState('')
  const [result, setResult] = useState(null)

  function handleSearch(e) {
    e.preventDefault()
    const p = findParcel(id.trim())
    setResult(p || false)
  }

  return (
    <section>
      <h2>Track Parcel</h2>
      <form onSubmit={handleSearch} className="form-inline">
        <input placeholder="Enter tracking id" value={id} onChange={e => setId(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {result === false && <p>No parcel found with that tracking id.</p>}
      {result && (
        <div className="card">
          <p><strong>Tracking ID:</strong> {result.trackingId}</p>
          <p><strong>Sender:</strong> {result.sender}</p>
          <p><strong>Receiver:</strong> {result.receiver}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Paid:</strong> {result.paid ? 'Yes' : 'No'}</p>
        </div>
      )}
    </section>
  )
}
