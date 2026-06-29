"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { brands, features, serviceAreas, services } from "@/lib/data";
import { PHONE, PHONE_DISPLAY, WA_LINK } from "@/lib/siteConfig";
import Navbar from "./Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

type FormState = {
  name: string;
  phone: string;
  service: string;
  area: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function LandingPage() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", service: "", area: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message ?? "Thank you. We received your enquiry.");
        setForm({ name: "", phone: "", service: "", area: "" });
        return;
      }

      setStatus("error");
      setMessage(data.message ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Failed to send. Please call us directly.");
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <BrandsSection />
        <WhyChooseUs />
        <ServiceAreas />
        <ContactSection form={form} setForm={setForm} status={status} message={message} handleSubmit={handleSubmit} />
      </main>
      <FloatingMobileCTA />
      <div className="only-mobile" style={{ height: 60 }} aria-hidden="true" />
    </>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ position: "relative", overflow: "hidden", backgroundColor: "#0f1117" }}>
      <div className="hero-frame" style={{ position: "relative", width: "100%", height: "clamp(480px, 72vh, 760px)", overflow: "hidden", backgroundColor: "#1a2230" }}>
        <Image
          className="hero-img"
          src="/images/hero.svg"
          alt="Professional technician repairing a double door refrigerator at a customer's home in Mumbai"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "right center", display: "block" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to bottom, rgba(10,14,20,0.72) 0%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} />
        <div className="hero-left-gradient" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "55%", background: "linear-gradient(to right, rgba(10,14,20,0.88) 0%, rgba(10,14,20,0.60) 55%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.15 }}
          style={{ position: "absolute", top: "50%", left: "clamp(24px, 6vw, 80px)", transform: "translateY(-50%)", zIndex: 10, maxWidth: 420, width: "42%", display: "flex", flexDirection: "column", gap: 20 }}
        >
          <p style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--primary))", margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "block", width: 20, height: 1.5, backgroundColor: "hsl(var(--primary))", flexShrink: 0 }} aria-hidden="true" />
            Mumbai&apos;s Trusted Fridge Repair Experts
          </p>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(28px, 3.4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff", margin: 0 }}>
            Refrigerator Repair <span style={{ color: "hsl(var(--primary))" }}>At Your Doorstep</span>
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.78)", margin: 0, maxWidth: "36ch" }}>
            Fast, reliable & expert fridge repair for all major brands. Same-day service across Mumbai.
          </p>
          <div className="hero-buttons" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <PrimaryCallButton label={`CALL NOW — ${PHONE_DISPLAY}`} />
            <WhatsAppButton outline label="WHATSAPP NOW" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: "⚡", strong: "Same-Day Service", sub: "Fast response across Mumbai" },
    { icon: "🔧", strong: "Genuine Spare Parts", sub: "Manufacturer-approved components" },
    { icon: "✅", strong: "All Major Brands", sub: "Samsung, LG, Whirlpool & more" },
    { icon: "💰", strong: "Transparent Pricing", sub: "No hidden charges, ever" },
  ];

  return (
    <div style={{ backgroundColor: "hsl(var(--card))", padding: "48px 32px" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", borderBottom: "1px solid hsl(var(--border))", paddingBottom: 48 }}>
        {items.map((item, i) => (
          <div className="trust-item" key={item.strong} style={{ display: "flex", alignItems: "center", gap: 12, flex: "1 1 200px", padding: "0 32px", borderLeft: i > 0 ? "1px solid hsl(var(--border))" : "none" }}>
            <div style={{ width: 36, height: 36, flexShrink: 0, backgroundColor: "rgba(239,78,63,0.12)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }} aria-hidden="true">
              {item.icon}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{item.strong}</span>
              <span style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.3, opacity: 0.7 }}>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" style={{ backgroundColor: "hsl(var(--card))", padding: "80px 32px" }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <SectionHeader eyebrow="What We Fix" title="Our Repair Services" copy="From minor fixes to major overhauls — we handle all refrigerator problems." centered />
          <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
            {services.map((svc) => (
              <motion.article key={svc.name} variants={fadeUp} whileHover={{ y: -3 }} style={{ backgroundColor: "hsl(var(--background))", borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.2)", cursor: "default" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  {svc.icon}
                  <h3 style={{ fontWeight: 700, fontSize: 17, margin: 0, lineHeight: 1.25 }}>{svc.name}</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "hsl(var(--muted-foreground))", margin: 0, opacity: 0.8 }}>{svc.desc}</p>
                <hr style={{ border: "none", borderTop: "1px solid hsl(var(--border))", margin: "4px 0 0" }} />
                <a href="#contact" style={{ fontWeight: 600, fontSize: 13, letterSpacing: "0.07em", textTransform: "uppercase", color: "hsl(var(--primary))", textDecoration: "none" }}>Book This Service →</a>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section id="brands" style={{ backgroundColor: "hsl(var(--background))", padding: "80px 32px" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 1000 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <SectionHeader eyebrow="Brand Coverage" title="We Service All Major Brands" centered />
          <motion.div variants={stagger} style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 36 }}>
            {brands.map((brand) => (
              <motion.span key={brand} variants={fadeUp} style={{ fontWeight: 600, fontSize: 14, backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 999, padding: "10px 22px" }}>{brand}</motion.span>
            ))}
            <motion.span variants={fadeUp} style={{ fontWeight: 700, fontSize: 14, color: "#fff", backgroundColor: "hsl(var(--primary))", borderRadius: 999, padding: "10px 22px", boxShadow: "0 4px 16px rgba(239,78,63,0.35)" }}>+ All Major Brands</motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-us" style={{ backgroundColor: "hsl(var(--card))", padding: "80px 32px" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <SectionHeader eyebrow="Why Frostify" title="Why Choose Us" centered />
          <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, marginTop: 44 }}>
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} style={{ backgroundColor: "hsl(var(--background))", borderRadius: 20, padding: 32, borderLeft: "3px solid hsl(var(--primary))", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "hsl(var(--muted-foreground))", margin: 0, opacity: 0.8 }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="service-areas" style={{ backgroundColor: "hsl(var(--background))", padding: "96px 32px" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" as const }} style={{ marginBottom: 56 }}>
          <SectionHeader eyebrow="Coverage" title="Service Areas" copy="We provide refrigerator repair service across Mumbai and nearby areas — same-day response available." />
        </motion.div>
        <div role="list" aria-label="Service areas" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))", gap: 16, marginBottom: 56 }}>
          {serviceAreas.map((area, i) => (
            <motion.div key={area} role="listitem" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" as const, delay: i * 0.03 }} style={{ backgroundColor: "hsl(var(--card))", borderRadius: "calc(var(--radius) * 1.5)", padding: "16px 20px", display: "flex", alignItems: "center", gap: 10, border: "1px solid hsl(var(--border))", boxShadow: "var(--shadow-sm)" }}>
              <span aria-hidden="true" style={{ color: "hsl(var(--primary))" }}>📍</span>
              <span style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.3 }}>{area}</span>
            </motion.div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid hsl(var(--border))", paddingTop: 32, display: "flex", alignItems: "center", gap: 12 }}>
          <span aria-hidden="true" style={{ color: "hsl(var(--primary))" }}>✅</span>
          <p style={{ fontWeight: 600, fontSize: 15, color: "hsl(var(--muted-foreground))", margin: 0 }}>Serving <span style={{ color: "hsl(var(--foreground))" }}>Mumbai & Nearby Areas</span></p>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ form, setForm, status, message, handleSubmit }: {
  form: FormState;
  setForm: (form: FormState) => void;
  status: SubmitStatus;
  message: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}) {
  return (
    <section id="contact" style={{ backgroundColor: "hsl(var(--background))", padding: "80px 32px" }}>
      <div className="container" style={{ maxWidth: 640 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <SectionHeader eyebrow="Get In Touch" title="Book a Repair" copy="Fill in your details and we'll call you back to confirm your appointment." centered />
          <motion.div className="contact-card" variants={fadeUp} style={{ backgroundColor: "hsl(var(--card))", borderRadius: 20, padding: 40, boxShadow: "0 4px 24px rgba(0,0,0,0.25)", marginTop: 34 }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontWeight: 700, fontSize: 22, margin: "0 0 8px" }}>Enquiry Received!</h3>
                <p style={{ color: "hsl(var(--muted-foreground))", margin: 0 }}>{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <Field label="Full Name" required><input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Rahul Sharma" style={inputStyle} /></Field>
                  <Field label="Phone Number" required><input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 98765 43210" style={inputStyle} /></Field>
                  <Field label="Service Required" required>
                    <select id="service" required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, color: form.service ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))", appearance: "none" }}>
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                  <Field label="Area / Locality"><input id="area" type="text" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} placeholder="e.g. Andheri, Bandra, Thane" style={inputStyle} /></Field>
                  {status === "error" && <p style={{ color: "hsl(var(--destructive))", fontSize: 14, margin: 0 }}>{message}</p>}
                  <button type="submit" disabled={status === "loading"} style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.07em", textTransform: "uppercase", backgroundColor: status === "loading" ? "hsl(var(--muted))" : "hsl(var(--primary))", color: "#fff", border: "none", borderRadius: 999, padding: "16px 32px", cursor: status === "loading" ? "not-allowed" : "pointer", boxShadow: status === "loading" ? "none" : "0 4px 20px rgba(239,78,63,0.35)", width: "100%", minHeight: 52 }}>{status === "loading" ? "Sending..." : "Send Enquiry"}</button>
                </div>
              </form>
            )}
          </motion.div>
          <div style={{ marginTop: 32, textAlign: "center", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
            <span style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", opacity: 0.7, width: "100%" }}>Or reach us directly — we respond fast</span>
            <PrimaryCallButton label={`CALL ${PHONE_DISPLAY}`} />
            <WhatsAppButton label="WHATSAPP NOW" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, copy, centered = false }: { eyebrow: string; title: string; copy?: string; centered?: boolean }) {
  return (
    <motion.div variants={fadeUp} style={{ textAlign: centered ? "center" : "left", marginBottom: copy ? 46 : 0 }}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy" style={{ maxWidth: centered ? "50ch" : "60ch", marginInline: centered ? "auto" : 0 }}>{copy}</p>}
    </motion.div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  const id = label.toLowerCase().replaceAll(" ", "-").replaceAll("/", "");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: "hsl(var(--muted-foreground))" }}>{label} {required && <span style={{ color: "hsl(var(--primary))" }}>*</span>}</label>
      {children}
    </div>
  );
}

const inputStyle = {
  backgroundColor: "hsl(var(--background))",
  border: "1px solid hsl(var(--border))",
  borderRadius: 6,
  color: "hsl(var(--foreground))",
  fontSize: 15,
  padding: "12px 14px",
  outline: "none",
  width: "100%",
} as const;

function PrimaryCallButton({ label }: { label: string }) {
  return (
    <a href={`tel:${PHONE}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, fontWeight: 700, fontSize: 15, letterSpacing: "0.05em", textTransform: "uppercase", backgroundColor: "hsl(var(--primary))", color: "#fff", borderRadius: 999, padding: "16px 32px", textDecoration: "none", boxShadow: "0 4px 20px rgba(239,78,63,0.35)", whiteSpace: "nowrap", minHeight: 52 }}>
      <span aria-hidden="true">☎</span>{label}
    </a>
  );
}

function WhatsAppButton({ label, outline = false }: { label: string; outline?: boolean }) {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, fontWeight: 700, fontSize: 15, letterSpacing: "0.05em", textTransform: "uppercase", backgroundColor: outline ? "transparent" : "#25D366", color: "#fff", border: outline ? "1.5px solid rgba(255,255,255,0.45)" : "none", borderRadius: 999, padding: outline ? "15px 32px" : "16px 32px", textDecoration: "none", boxShadow: outline ? "none" : "0 4px 20px rgba(37,211,102,0.30)", whiteSpace: "nowrap", minHeight: 52 }}>
      <span aria-hidden="true">☘</span>{label}
    </a>
  );
}

function FloatingMobileCTA() {
  return (
    <div className="only-mobile" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, borderTop: "1px solid hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}>
      <a href={`tel:${PHONE}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase", backgroundColor: "hsl(var(--primary))", color: "#fff", textDecoration: "none", padding: "16px 12px", minHeight: 60 }}>☎ Call {PHONE_DISPLAY}</a>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase", backgroundColor: "#25D366", color: "#fff", textDecoration: "none", padding: "16px 12px", minHeight: 60 }}>☘ WhatsApp Now</a>
    </div>
  );
}
