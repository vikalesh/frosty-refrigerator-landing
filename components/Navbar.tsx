import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/siteConfig";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
        background: "rgba(7,19,31,.9)",
        borderBottom: "1px solid rgba(255,255,255,.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "linear-gradient(135deg,#2563eb,#06b6d4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            🧺
          </div>

          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              Frostify
            </div>

            <div
              style={{
                fontSize: "12px",
                color: "#9ca3af",
              }}
            >
              Service Center
            </div>
          </div>
        </a>

        {/* Menu */}
        <nav
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {/* <a href="#services">Services</a>
          <a href="#contact">Contact</a> */}

          <a
            href={`tel:${PHONE}`}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            📞 {PHONE_DISPLAY}
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#22c55e",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            WhatsApp Now
          </a>
        </nav>
      </div>
    </header>
  );
}