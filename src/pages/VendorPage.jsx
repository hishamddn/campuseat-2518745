import { useParams, Link } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import MenuList from '../components/MenuList.jsx'
import SpecialBanner from '../components/SpecialBanner.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => v.id === id)

  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p className="muted">The requested cafeteria stall does not exist.</p>
        <Link to="/" className="btn" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>
          Back to all vendors
        </Link>
      </div>
    )
  }

  const specialItem = vendor.menu?.find((item) => item.special)

  return (
    <section>
      <Link to="/" className="link danger" style={{ display: 'inline-block', marginBottom: '1rem', color: '#006b54' }}>
        &larr; Back to vendors
      </Link>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      <p className="muted" style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>
        {vendor.location} &middot; Open: {vendor.openHours}
      </p>

      <SpecialBanner specialItem={specialItem} />
      <MenuList items={vendor.menu || []} />
    </section>
  )
}

export default VendorPage