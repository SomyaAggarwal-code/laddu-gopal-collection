import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        background: "#B8860B",
        color: "white",
      }}
    >
      <h2>🌸 Laddu Gopal Collection</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link href="/shop" style={{ color: "white", textDecoration: "none" }}>
          Shop
        </Link>

        <Link
          href="/custom-order"
          style={{ color: "white", textDecoration: "none" }}
        >
          Custom Order
        </Link>

        <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
