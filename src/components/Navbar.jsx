const Navbar = () => {
    return (
    <nav className="container">
       <div className="logo">
         <img src="/images/brand_logo.jpg" alt="Logo" />
       </div>
     <ul className="nav-btn">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
     </ul>

     <button className="login-btn">Login</button>
    </nav>
 );
};

export default Navbar;