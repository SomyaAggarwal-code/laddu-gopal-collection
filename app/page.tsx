import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#FFFDF5",
          color: "#333",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ color: "#B8860B", fontSize: "40px" }}>
            🌸 Laddu Gopal Collection 🌸
          </h1>

          <p>Premium Dresses, Mukut, Jewellery & Accessories</p>

          <button
            style={{
              marginTop: "20px",
              background: "#B8860B",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Shop Now
          </button>
        </header>

        <section>
          <h2>✨ New Arrivals</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>Designer Dress</h3>
              <p>₹799</p>
              <button>Order Now</button>
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>Beautiful Mukut</h3>
              <p>₹499</p>
              <button>Order Now</button>
            </div>
          </div>
        </section>

        <section style={{ marginTop: "50px" }}>
          <h2>🎨 Custom Design</h2>

          <p>Want a custom dress or jewellery? Contact us on WhatsApp.</p>

          <a href="https://wa.me/917015053081" target="_blank">
            WhatsApp Us
          </a>
        </section>

        <section style={{ marginTop: "50px" }}>
  <h2>📞 Contact</h2>

  <p>7015053081</p>
  <p>9896000357</p>

  <p>📍 Fatehabad, Haryana</p>

  <p>Instagram: @laddu_gopal.collection</p>
</section>

</main>

<Footer />
</>
);
}
