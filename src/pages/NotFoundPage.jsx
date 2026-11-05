import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="card">
      <h2>404 - Page Not Found</h2>
      <p className="muted">The page you are looking for does not exist.</p>
      <Link to="/" className="btn" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>
        Back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage