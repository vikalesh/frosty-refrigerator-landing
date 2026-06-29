import LandingPage from "@/components/LandingPage";
import { jsonLd } from "@/lib/siteConfig";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
