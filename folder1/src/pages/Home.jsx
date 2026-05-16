import React from 'react'

export default function Home() {
  return (
    <section>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Courier Management</h1>
          <p className="hero-subtitle">Fast, Reliable, and Secure Parcel Delivery Services</p>
          <p>We provide comprehensive courier solutions to ensure your parcels reach their destination safely and on time. Our platform makes it easy to book, track, and manage your shipments with complete transparency and reliability.</p>
        </div>
        <div className="hero-image">
          <img src="/courier-logo.svg" alt="Courier Service Logo" />
        </div>
      </div>

      <div className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Parcel Booking</h3>
            <p>Easily book and schedule your parcel pickups with just a few clicks. We handle everything from collection to delivery.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📍</div>
            <h3>Real-time Tracking</h3>
            <p>Track your parcels in real-time and get instant updates on their location and delivery status throughout the journey.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>Secure Payments</h3>
            <p>Safe and secure payment options with multiple gateways to ensure your transactions are protected.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🤝</div>
            <h3>Customer Support</h3>
            <p>Our dedicated support team is available 24/7 to assist with any questions or concerns about your shipments.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
