import { useState, useEffect } from 'react'

function SpecialBanner({ specialItem, onAdd }) {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    function updateCountdown() {
      const now = new Date()
      // Special deal ends at 23:00:00 tonight
      const end = new Date()
      end.setHours(23, 0, 0, 0)

      const diff = end - now
      if (diff <= 0) {
        setTimeLeft('Deal ended') 
        return
      }

      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0')
      const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0')
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')
      setTimeLeft(`${hours}:${minutes}:${seconds}`)
    }

    updateCountdown()
    const intervalId = setInterval(updateCountdown, 1000)

    // Cleanup interval on unmount
    return () => clearInterval(intervalId)
  }, [])

  if (!specialItem) return null


  return (
    <aside 
      className="card special-banner" 
      style={{ border: '2px solid #006b54', marginBottom: '1.5rem', padding: '1rem', borderRadius: '8px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span className="tag" style={{ background: '#006b54', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
          Daily Special
        </span>
        <span style={{ color: '#b3261e', fontWeight: 'bold', fontSize: '0.9rem' }}>
          Ends in: {timeLeft}
        </span>
      </div>

      <h3 style={{ marginTop: '0.75rem', marginBottom: '0.25rem' }}>{specialItem.name}</h3>
      <p className="muted" style={{ margin: '0 0 0.5rem 0' }}>{specialItem.description}</p>
      <p className="price" style={{ fontWeight: 'bold', margin: '0 0 0.75rem 0' }}>
        RM {specialItem.price.toFixed(2)}
      </p>

      <button 
        type="button"
        className="btn" 
        disabled={!specialItem.available}
        onClick={() => onAdd(specialItem)}
      >
        {specialItem.available ? 'Add special to cart' : 'Sold out'}
      </button>
    </aside>
  )
}

export default SpecialBanner