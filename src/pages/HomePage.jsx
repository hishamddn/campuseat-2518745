import { Link } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import VendorCard from '../components/VendorCard.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function HomePage() {
  const { vendors, loading, error, reload } = useVendors()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  // Matric Digit 5: Find all specials across all vendors
  const allSpecials = vendors.flatMap((v) =>
    (v.menu || [])
      .filter((item) => item.special)
      .map((item) => ({ ...item, vendorId: v.id, vendorName: v.name }))
  )

  return (
    <>
      {/* Week 4 Personal Feature: Today's specials on Home Page */}
      {allSpecials.length > 0 && (
        <section style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">Today's Specials</h2>
          <div className="grid">
            {allSpecials.map((spec) => (
              <article key={spec.id} className="card menu-card" style={{ border: '2px solid #006b54' }}>
                <span className="tag" style={{ background: '#006b54', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  Special at {spec.vendorName}
                </span>
                <h3 style={{ marginTop: '0.5rem' }}>{spec.name}</h3>
                <p className="muted">{spec.description}</p>
                <p className="price">RM {(spec.discountPrice || spec.price).toFixed(2)}</p>
                <Link
                  to={`/vendor/${spec.vendorId}`}
                  className="btn"
                  style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none', marginTop: '0.5rem', color: '#ffffff', }}
                >
                  View at {spec.vendorName}
                </Link>
              </article>
            ))}
            
          </div>
        </section>
      )}

      <section>
        <h2 className="section-title">Choose a vendor</h2>
        <div className="vendor-grid">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage