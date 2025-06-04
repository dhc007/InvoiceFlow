import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    id: 1,
    title: "Automated Invoice Creation",
    description:
      "Generate professional invoices quickly with customizable templates and automated data entry.",
    imageUrl: "../depth-8--frame-0.png",
  },
  {
    id: 2,
    title: "Smart Approval Workflows",
    description:
      "Route invoices for approval based on predefined rules, ensuring compliance and efficiency.",
    imageUrl: "../depth-8--frame-0-1.png",
  },
  {
    id: 3,
    title: "Seamless Payment Integration",
    description:
      "Integrate with popular payment gateways for fast and secure payments, with automated reconciliation.",
    imageUrl: "../depth-8--frame-0-2.png",
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 md:gap-10 px-4 py-8 md:py-10 w-full">
      <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
        <div className="flex flex-col items-start max-w-full md:max-w-[720px]">
          <h2 className="text-3xl md:text-4xl font-black text-[#1c160c] tracking-[-1.00px] leading-[1.2] md:leading-[45px] font-sans">
            Key Features
          </h2>
        </div>

        <div className="flex flex-col items-start max-w-full md:max-w-[720px]">
          <p className="text-sm md:text-base text-[#1c160c] leading-5 md:leading-6 font-normal">
            InvoiceFlow offers a comprehensive suite of features to optimize
            your invoice management.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {features.map((feature) => (
          <Card
            key={feature.id}
            className="border-0 p-0 bg-transparent"
          >
            <CardContent className="flex flex-col gap-3 p-0 pb-3">
              <div
                className="w-full h-[140px] md:h-[169px] rounded-xl"
                style={{
                  background: `url(${feature.imageUrl}) 50% 50% / cover`,
                }}
              />
              <div className="flex flex-col items-start w-full">
                <h3 className="font-medium text-[#1c160c] text-base leading-6 w-full">
                  {feature.title}
                </h3>
                <p className="font-normal text-[#9e8747] text-sm leading-[21px] w-full">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};