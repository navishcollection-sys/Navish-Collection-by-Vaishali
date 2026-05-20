export default function App() {
  const products = [
    {
      name: "Elegant Anarkali Suit ✨",
      price: "₹1150",
      image:
        "https://i.ibb.co/DHQgM3nd/Whats-App-Image-2026-05-17-at-2-50-48-PM-1.jpg",
    },
    {
      name: "Premium Cotton Suit 💖",
      price: "₹1050",
      image:
        "https://i.ibb.co/gZPt5QqR/Whats-App-Image-2026-05-17-at-2-55-15-PM.jpg",
    },
    {
      name: "Khadi Cord Set 👑",
      price: "₹890",
      image:
        "https://i.ibb.co/S4LKMg83/Whats-App-Image-2026-05-17-at-3-01-35-PM-1.jpg",
    },
  ];

  return (
    <div>
      <header>
        <h1>NAVISH COLLECTION ✨</h1>
        <p>Premium Ethnic Wear</p>
      </header>

      <section className="hero">
        <img
          src="https://i.ibb.co/3mb6DC58/Whats-App-Image-2026-05-17-at-2-50-47-PM.jpg"
          alt="Hero"
        />

        <h1>Elegant Ethnic Fashion 💖</h1>

        <p>Premium suits for every occasion</p>

        <a
          className="btn"
          href="https://wa.me/919660123397"
        >
          Shop On WhatsApp
        </a>
      </section>

      <section className="products">
        {products.map((product) => (
          <div className="card" key={product.name}>
            <img src={product.image} alt={product.name} />

            <div className="card-content">
              <h3>{product.name}</h3>

              <div className="price">{product.price}</div>

              <a
                className="btn"
                href="https://wa.me/919660123397"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <h2>Navish Collection 💖</h2>

        <p>Premium Ethnic Wear</p>
      </footer>
    </div>
  );
}
