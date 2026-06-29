import type { ReactNode } from "react";

type Service = {
  name: string;
  desc: string;
  icon: ReactNode;
};

const iconColor = "hsl(var(--primary))";

export const services: Service[] = [
  {
    name: "Not Cooling Repair",
    desc: "Diagnose and fix all refrigerator cooling failures fast.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="2" width="20" height="28" rx="3" stroke={iconColor} strokeWidth="2" />
        <line x1="6" y1="14" x2="26" y2="14" stroke={iconColor} strokeWidth="2" />
        <circle cx="20" cy="8" r="2" fill={iconColor} />
        <circle cx="20" cy="20" r="1.5" fill={iconColor} />
      </svg>
    ),
  },
  {
    name: "Gas Charging",
    desc: "Refrigerant refill and leak detection for optimal cooling.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C10 4 6 9 6 14C6 20 10 26 16 28C22 26 26 20 26 14C26 9 22 4 16 4Z" stroke={iconColor} strokeWidth="2" />
        <path d="M16 10V16L20 18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Compressor Repair",
    desc: "Expert compressor diagnostics, repair, and replacement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke={iconColor} strokeWidth="2" />
        <circle cx="16" cy="16" r="4" stroke={iconColor} strokeWidth="2" />
        <line x1="16" y1="6" x2="16" y2="12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="20" x2="16" y2="26" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="16" x2="12" y2="16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="16" x2="26" y2="16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "PCB Repair",
    desc: "Circuit board diagnostics and electronic component repair.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke={iconColor} strokeWidth="2" />
        <rect x="9" y="12" width="4" height="4" rx="1" stroke={iconColor} strokeWidth="1.5" />
        <rect x="19" y="12" width="4" height="4" rx="1" stroke={iconColor} strokeWidth="1.5" />
        <line x1="8" y1="4" x2="8" y2="8" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="4" x2="16" y2="8" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="4" x2="24" y2="8" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="24" x2="8" y2="28" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="28" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="24" x2="24" y2="28" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Cooling Problem",
    desc: "Identify and resolve uneven or insufficient cooling issues.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 22C8 16 12 10 16 8C20 10 24 16 24 22" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 22C12 18 14 14 16 12C18 14 20 18 20 22" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="22" x2="16" y2="28" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Ice Making Problem",
    desc: "Fix ice maker faults, blockages, and freezer issues.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4L16 28M4 16L28 16M7.5 7.5L24.5 24.5M24.5 7.5L7.5 24.5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="4" stroke={iconColor} strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Water Leakage Repair",
    desc: "Stop water leaks from drain, door seals, and water lines.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C16 4 8 14 8 20C8 24.4 11.6 28 16 28C20.4 28 24 24.4 24 20C24 14 16 4 16 4Z" stroke={iconColor} strokeWidth="2" />
        <path d="M12 22C12 22 13 24 16 24" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Fridge Maintenance",
    desc: "Preventive servicing to extend your refrigerator's life.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M22 10L28 4L24 2L22 6L18 10L14 14L6 22L4 28L10 26L18 18L22 14V10Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="24" r="2" stroke={iconColor} strokeWidth="2" />
      </svg>
    ),
  },
];

export const brands = [
  "Samsung", "LG", "Whirlpool", "Bosch", "Haier", "Godrej", "IFB", "Videocon", "Voltas", "Panasonic", "Hitachi", "Electrolux",
];

export const features = [
  { icon: "✅", title: "Experienced Technicians", desc: "Trained professionals with years of hands-on refrigerator repair experience." },
  { icon: "⚡", title: "Quick Response", desc: "Same-day service available across Mumbai — we come to you fast." },
  { icon: "🏠", title: "Home Service", desc: "We come to you — no need to carry your heavy fridge anywhere." },
  { icon: "🔧", title: "Genuine Spare Parts", desc: "Only authentic, manufacturer-approved parts used for lasting repairs." },
  { icon: "💰", title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges — you know the cost upfront." },
];

export const serviceAreas = [
  "South Mumbai", "Malabar Hill", "Colaba", "Andheri", "Bandra", "Juhu", "Dadar", "Kurla", "Powai", "Borivali", "Kandivali", "Malad", "Goregaon", "Thane", "Mira Road", "Navi Mumbai",
];
