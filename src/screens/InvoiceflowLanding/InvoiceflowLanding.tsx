import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FAQSection } from "./sections/FAQSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { KeyFeaturesSection } from "./sections/KeyFeaturesSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const InvoiceflowLanding = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <section className="flex flex-col w-full bg-[#fcf9f7]">
        <div className="flex flex-col w-full">
          <HeroSection />

          <div className="flex justify-center px-4 md:px-40 py-5 w-full">
            <div className="flex flex-col max-w-full md:max-w-[960px] w-full" id="features">
              <MainContentSection />
              <CallToActionSection />
              <HeaderSection />
              <TestimonialsSection />
              <FAQSection />
              <BenefitsSection />
            </div>
          </div>

          <KeyFeaturesSection />
        </div>
      </section>
    </main>
  );
};