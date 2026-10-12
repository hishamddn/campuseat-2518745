function Header({cartCount}){

    return (
        <header className = "header">
            <h1 className="logo">CampusEats</h1>
            <nav className = "nav">
                <a href="#">Vendors</a>
                <a href="#">Orders</a>
                <a href="#" className="cart">Cart <span>{cartCount}</span></a>
            </nav>
        </header>
    )
}

export default Header