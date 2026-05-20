export default function NavishCollectionWebsite() {
  const heroImage = "https://i.ibb.co/3mb6DC58/Whats-App-Image-2026-05-17-at-2-50-47-PM.jpg";

  const products = [
    {
      name: "Elegant Anarkali Suit ✨",
      price: "₹1150",
      desc: "Pure Cotton • Free Shipping 🚚",
      image: "https://i.ibb.co/DHQgM3nd/Whats-App-Image-2026-05-17-at-2-50-48-PM-1.jpg",
    },
    {
      name: "Premium Cotton Suit 💖",
      price: "₹1050",
      desc: "Soft Fabric • Elegant Look 🌸",
      image: "https://i.ibb.co/gZPt5QqR/Whats-App-Image-2026-05-17-at-2-55-15-PM.jpg",
    },
    {
      name: "Khadi Cord Set 👑",
      price: "₹890",
      desc: "Premium Feel • Trendy Style ✨",
      image: "https://i.ibb.co/S4LKMg83/Whats-App-Image-2026-05-17-at-3-01-35-PM-1.jpg",
    },
    {
      name: "Wine Party Wear ❤️",
      price: "₹1250",
      desc: "Elegant Party Collection ✨",
      image: "https://i.ibb.co/rRzS1W86/Whats-App-Image-2026-05-18-at-3-25-15-PM.jpg",
    },
    {
      name: "Designer Cotton Suit 🌸",
      price: "₹1050",
      desc: "Soft & Comfortable 💖",
      image: "https://i.ibb.co/HTn3tV9C/Whats-App-Image-2026-05-18-at-3-28-20-PM.jpg",
    },
    {
      name: "Premium Purple Set 👑",
      price: "₹1350",
      desc: "Luxury Ethnic Wear ✨",
      image: "https://i.ibb.co/fYc8Hztv/Whats-App-Image-2026-05-18-at-3-38-41-PM.jpg",
    },
  ];

  return (
    <div className="bg-[#fffaf7] text-gray-900 min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#f3e7de]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/JjqCtVdc/Screenshot-2026-05-20-141720.png"
              alt="Navish Collection Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-2xl shadow-sm"
            />

            <div>
              <h1 className="text-2xl md:text-4xl font-bold tracking-[3px] text-[#5c3b2e] leading-none">
                NAVISH
              </h1>

              <p className="text-xs md:text-sm tracking-[5px] text-[#9b6b5b] uppercase mt-2">
                Collection By Vaishali ✨
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[#5c3b2e] font-medium">
            <a href="#" className="hover:text-[#9b6b5b] transition">Home</a>
            <a href="#" className="hover:text-[#9b6b5b] transition">New Arrivals</a>
            <a href="#" className="hover:text-[#9b6b5b] transition">Collections</a>
            <a href="#" className="hover:text-[#9b6b5b] transition">Best Sellers</a>
            <a href="#" className="hover:text-[#9b6b5b] transition">Contact</a>
          </nav>

          <a
            href="https://wa.me/919660123397"
            className="bg-[#9b6b5b] text-white px-5 py-3 rounded-xl text-sm md:text-base font-medium"
          >
            WhatsApp 💬
          </a>
        </div>
      </header>
      {/* HERO */}
      <section className="bg-white px-4 md:px-10 py-6 md:py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto bg-[#f8efe8] rounded-[40px] overflow-hidden shadow-sm">
          <div className="p-8 md:p-16">
            <p className="uppercase tracking-[4px] text-sm text-[#9b6b5b] mb-4">
              Timeless Elegance ✨
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-[#5c3b2e]">
              Premium Ethnic Wear
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Elegant styles for everyday & festive looks 💖
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://wa.me/919660123397"
                className="bg-[#9b6b5b] text-white px-8 py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition text-center"
              >
                Shop On WhatsApp 💬
              </a>

              <a
                href="https://chat.whatsapp.com/K2eLu4kMZTZIzzWQamcaEh"
                className="bg-white text-[#9b6b5b] border border-[#9b6b5b] px-8 py-4 rounded-2xl text-lg font-medium hover:bg-[#fff6f2] transition text-center"
              >
                Join VIP Group ✨
              </a>
            </div>
          </div>

          <div className="h-full">
            <img
              src={heroImage}
              alt="Navish Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="px-4 md:px-10 pb-10">
        <div className="bg-white rounded-[35px] p-6 md:p-10 shadow-sm max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[3px] text-sm text-[#9b6b5b] mb-2">
              Explore Collections ✨
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#5c3b2e]">
              New Arrivals 💖
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-[#fffaf7] rounded-3xl overflow-hidden border border-[#f3e7de] hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[280px] w-full object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-sm md:text-base mb-1 text-[#5c3b2e]">
                    {product.name}
                  </h3>

                  <p className="text-[#9b6b5b] font-bold mb-3">
                    {product.price}
                  </p>

                  <a
                    href="https://wa.me/919660123397"
                    className="inline-block bg-[#9b6b5b] text-white px-4 py-2 rounded-xl text-sm"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-16 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Best Sellers 💖</h2>
          <p className="text-gray-600 text-lg">
            Simple, elegant & trendy styles 👑
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[420px] w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-5">{product.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {product.price}
                  </span>

                  <a
                    href="https://wa.me/919660123397"
                    className="bg-black text-white px-5 py-3 rounded-xl"
                  >
                    Order 💖
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-white px-6 md:px-16 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Shop By Collection ✨</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Cotton Suits 🌸",
            "Anarkali 👑",
            "Party Wear ✨",
            "Cord Sets 💖",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#fff2f5] rounded-3xl h-40 flex items-center justify-center text-center font-semibold text-lg shadow-sm hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 md:px-16 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Why Choose Us 💫</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Premium Quality ✨",
            "Free Shipping 🚚",
            "Affordable Prices 💖",
            "Fast Dispatch ⚡",
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-3xl shadow-sm text-lg font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center px-6 py-16">
        <h2 className="text-4xl font-bold mb-4">Navish Collection ✨</h2>

        <p className="text-gray-300 text-lg mb-8">
          Premium ethnic wear with modern elegance 💖
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-lg">
          <a href="https://instagram.com/navishcollectionbyvaishali">
            Instagram 📸
          </a>

          <a href="https://facebook.com/navishcollectionbyvaishali">
            Facebook 💙
          </a>

          <a href="https://youtube.com/@navishcollectionbyvaishali">
            YouTube ▶️
          </a>
        </div>

        <a
          href="https://wa.me/919660123397"
          className="inline-block bg-pink-500 text-white px-8 py-4 rounded-2xl text-lg font-medium"
        >
          Order On WhatsApp 💬
        </a>
      </footer>
    </div>
  );
}
