import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutSection } from "@/components/sections/about-section";
import { CoreValuesSection } from "@/components/sections/core-values-section";
import { StrategicObjectivesSection } from "@/components/sections/strategic-objectives-section";
import { InitiativesSection } from "@/components/sections/initiatives-section";
import { ServicesSection } from "@/components/sections/services-section";
import { NewsSection } from "@/components/sections/news-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

import { AIAssistantSection } from "@/components/sections/ai-assistant-section";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-cairo overflow-x-hidden"
      dir="rtl"
    >
      {/* Mosaic Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="mosaic-pattern w-full h-full"></div>
      </div>

      <TopBar />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoreValuesSection />
      <StrategicObjectivesSection />
      <InitiativesSection />
      <ServicesSection />
      <NewsSection />
      <AIAssistantSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
