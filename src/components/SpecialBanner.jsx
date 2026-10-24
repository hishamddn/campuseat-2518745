function SpecialBanner({ specialItem, onAdd }) {
  if (!specialItem) return null

  return (
    <aside className="card special-banner" style={{ border: '2px solid #006b54', marginBottom: '1.5rem', padding: '1rem' }}>
      <span className="tag" style={{ background: '#006b54', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
        Today's Special
      </span>
      <h3 style={{ marginTop: '0.5rem' }}>{specialItem.name}</h3>
      <p className="muted">{specialItem.description}</p>
      <p className="price">RM {specialItem.price.toFixed(2)}</p>
      <button 
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