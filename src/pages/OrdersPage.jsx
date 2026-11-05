import { Link } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (!orders || orders.length === 0) {
    return (
      <div className="card">
        <h2>My Orders</h2>
        <p className="muted">No orders placed yet.</p>
        <Link to="/" className="btn" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>
          Start ordering
        </Link>
      </div>
    )
  }

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {orders.map((ord) => (
          <article key={ord.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Order #{ord.id.slice(-6)}</h3>
              <span className="tag" style={{ background: '#006b54', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                Placed: {ord.date}
              </span>
            </div>
            <p style={{ margin: '0.5rem 0' }}>
              <strong>Name:</strong> {ord.name} &middot; <strong>Mahallah:</strong> {ord.mahallah} &middot; <strong>Pickup time:</strong> {ord.pickupTime}
            </p>
            <ul style={{ margin: '0.5rem 0 1rem 1.25rem' }}>
              {ord.items.map((line) => (
                <li key={line.item.id}>
                  {line.qty}x {line.item.name} &mdash; RM {(line.item.price * line.qty).toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="price" style={{ textAlign: 'right', fontWeight: 'bold' }}>
              Total: RM {ord.total.toFixed(2)}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OrdersPage