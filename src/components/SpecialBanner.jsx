import { useState, useEffect } from 'react'

function SpecialBanner({ specialItem, onAdd }) {
  const [timeLeft, setTimeLeft] = useState('')
  const [isEnded, setIsEnded] = useState(false)

  useEffect(() => {
    if (!specialItem?.endsAt) return

    function updateCountdown() {
      const now = new Date()
      const [endHours, endMinutes] = specialItem.endsAt.split(':').map(Number)
      const targetTime = new Date()
      targetTime.setHours(endHours, endMinutes, 0, 0)

      const diff = targetTime - now

      if (diff <= 0) {
        setTimeLeft('Deal ended')
        setIsEnded(true)
        return
      }

      setIsEnded(false)
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0')
      const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0')
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')
      setTimeLeft(`${hours}:${minutes}:${seconds}`)
    }

    updateCountdown()
    const intervalId = setInterval(updateCountdown, 1000)
    return () => clearInterval(intervalId)
  }, [specialItem])

  if (!specialItem) return null

  const isButtonDisabled = !specialItem.available || isEnded
  const promoPrice = specialItem.discountPrice || specialItem.price

  function handleAddSpecial() {
    // Add to cart with the promo price
    onAdd({
      ...specialItem,
      id: `${specialItem.id}-special`,
      name: `${specialItem.name} (Daily Special)`,
      price: promoPrice,
    })
  }

  return (
    <aside
      className="card special-banner"
      style={{
        border: '2px solid #006b54',
        marginBottom: '1.5rem',
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="tag" style={{ background: '#006b54', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
          Daily Special
        </span>
        <span style={{ color: isEnded ? '#b3261e' : '#006b54', fontWeight: 'bold', fontSize: '0.9rem' }}>
          {isEnded ? 'Deal ended' : `Ends in: ${timeLeft}`}
        </span>
      </div>

      <h3 style={{ marginTop: '0.75rem', marginBottom: '0.25rem' }}>{specialItem.name}</h3>
      <p className="muted" style={{ margin: '0 0 0.5rem 0' }}>{specialItem.description}</p>
      
      <p style={{ margin: '0 0 0.75rem 0' }}>
        <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '0.5rem' }}>
          RM {specialItem.price.toFixed(2)}
        </span>
        <strong style={{ color: '#b3261e', fontSize: '1.15rem' }}>
          RM {promoPrice.toFixed(2)}
        </strong>
      </p>

      <button
        type="button"
        className="btn"
        disabled={isButtonDisabled}
        onClick={handleAddSpecial}
      >
        {!specialItem.available ? 'Sold out' : isEnded ? 'Deal ended' : 'Add special to cart'}
      </button>
    </aside>
  )
}

export default SpecialBanner