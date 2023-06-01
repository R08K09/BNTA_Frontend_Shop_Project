const Footer = () => {
    return ( 
        <footer>
            <nav id="footer-nav">
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Media</a>
                    <a href="#">Privacy</a>
                    <a href="#">Audio Description</a>
            </nav>

            <section className="newsletter">
                <h2> Subscribe to our Newsletter:</h2>
                <form id="newsletter-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"/>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"/>

                    <button>Subscribe</button>
                </form>
            </section>

            <div className="footer-bottom">
            <p>&copy; Travel. Freedom. Luxury Inc. 2023</p>
        </div>

            <div className="footer-logo">
                <img src="https://static.vecteezy.com/system/resources/previews/020/108/970/original/tfl-flat-accounting-logo-design-on-white-background-tfl-creative-initials-growth-graph-letter-logo-concept-tfl-business-finance-logo-design-vector.jpg" alt="tfl logo" width="150" />
            </div>

    </footer>
     );
}
 
export default Footer;