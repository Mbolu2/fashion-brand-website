import { motion } from "framer-motion";

export default function App() {
  return (
   
    <>
    <body>
    <header className="navbar">
      <div className="navbar-container">
  <h1 className="navbar-logo">Ara Style</h1>
        <nav className="navbar-nav">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="hero-title">Style Redefined</h2>
        <p className="hero-subtitle">Discover timeless elegance for the modern woman</p>
        <button className="hero-btn">Shop Now</button>
      </div>
    </section>

    <section id="collections" className="collections">
      <h3 className="section-title">Our Collections</h3>
      <p className="section-subtitle">Explore our curated selection of sophisticated designs</p>
      <div className="collections-grid">
        <div className="collection-card">
          <div className="collection-image-wrapper">
            <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Elegant Dress" className="collection-image"/>
            <div className="collection-overlay"></div>
          </div>
          <div className="collection-info">
            <h4>Elegant Dress</h4>
          </div>
        </div>

        <div className="collection-card">
          <div className="collection-image-wrapper">
            <img src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Evening Gown" className="collection-image"/>
            <div className="collection-overlay"></div>
          </div>
          <div className="collection-info">
            <h4>Evening Gown</h4>
          </div>
        </div>

        <div className="collection-card">
          <div className="collection-image-wrapper">
            <img src="https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Casual Wear" className="collection-image"/>
            <div className="collection-overlay"></div>
          </div>
          <div className="collection-info">
            <h4>Casual Wear</h4>
          </div>
        </div>

        <div className="collection-card">
          <div className="collection-image-wrapper">
            <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Business Attire" className="collection-image"/>
            <div className="collection-overlay"></div>
          </div>
          <div className="collection-info">
            <h4>Business Attire</h4>
          </div>
        </div>

        <div className="collection-card">
          <div className="collection-image-wrapper">
            <img src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Summer Collection" className="collection-image"/>
            <div className="collection-overlay"></div>
          </div>
          <div className="collection-info">
            <h4>Summer Collection</h4>
          </div>
        </div>

        <div className="collection-card">
          <div className="collection-image-wrapper">
            <img src="https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" alt="Winter Elegance" className="collection-image"/>
            <div className="collection-overlay"></div>
          </div>
          <div className="collection-info">
            <h4>Winter Elegance</h4>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="testimonials">
      <h3 className="section-title">What Our Clients Say</h3>
  <p className="section-subtitle">Hear from the women who trust Ara Style</p>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="quote-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 1.972V11c0 1.25.75 4 4 4 .5 0 1-.5 1-1s-.5-.5-1-.5c-1 0-2-1.5-2-4V5c0-1 .5-1.5 1.5-1.5s4 1.5 4 5v7.5c0 6-4 8-7 8z"></path>
            </svg>
          </div>
          <p className="testimonial-text">Ara Style transformed my wardrobe. The quality and elegance are unmatched!</p>
          <div className="testimonial-author">
            <h4>Sophia Martinez</h4>
            <p>Fashion Blogger</p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 1.972V11c0 1.25.75 4 4 4 .5 0 1-.5 1-1s-.5-.5-1-.5c-1 0-2-1.5-2-4V5c0-1 .5-1.5 1.5-1.5s4 1.5 4 5v7.5c0 6-4 8-7 8z"></path>
            </svg>
          </div>
          <p className="testimonial-text">Every piece feels like it was made just for me. Absolutely stunning designs.</p>
          <div className="testimonial-author">
            <h4>Emma Thompson</h4>
            <p>Executive</p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 1.972V11c0 1.25.75 4 4 4 .5 0 1-.5 1-1s-.5-.5-1-.5c-1 0-2-1.5-2-4V5c0-1 .5-1.5 1.5-1.5s4 1.5 4 5v7.5c0 6-4 8-7 8z"></path>
            </svg>
          </div>
          <p className="testimonial-text">The perfect blend of classNameic and contemporary. My go-to brand for special occasions.</p>
          <div className="testimonial-author">
            <h4>Isabella Chen</h4>
            <p>Entrepreneur</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="newsletter">
      <div className="newsletter-content">
        <h3 className="section-title" style={{ color: 'white' }}>Stay in Style</h3>
        <p className="section-subtitle" style={{ color: '#d1d5db' }}>Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections</p>
        <form className="newsletter-form" id="newsletterForm">
          <input type="email" placeholder="Enter your email" required/>
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </section>

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Ara Style</h3>
          <p>Redefining elegance for the modern woman. Quality craftsmanship meets timeless design.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.623 3.872 10.328 9 11.624V15h-3v-3h3V9c0-3.065 1.814-4.957 4.927-4.957 1.428 0 2.878.266 2.878.266v3.163h-1.622c-1.597 0-2.093.994-2.093 2.014V12h3.583l-.572 3h-3.011v8.624c5.128-1.296 9-6.001 9-11.624 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.22-.054-.334-.375-.114l-6.88 4.33-2.97-.924c-.644-.203-.658-.644.135-.953l11.593-4.47c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-1.5 4-5 5m7-13h-1.42C6.77 3 4 5.75 4 9.11V15a4 4 0 004 4h12a4 4 0 004-4V7a4 4 0 00-4-4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
  <p>&copy; 2025 Ara Style. All rights reserved.</p>
      </div>
    </footer>

    <script src="/src/script.js" type="module"></script>
  </body></>
  );
}
