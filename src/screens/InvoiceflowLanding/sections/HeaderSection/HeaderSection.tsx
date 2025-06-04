import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Define pricing plan data for better maintainability
const pricingPlans = [
  {
    name: "Basic",
    price: "$19",
    buttonText: "Choose Plan",
    features: ["Up to 50 invoices", "Basic reporting", "Email support"],
  },
  {
    name: "Pro",
    price: "$49",
    buttonText: "Choose Plan",
    features: [
      "Unlimited invoices",
      "Advanced reporting",
      "Priority support",
      "Custom workflows",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    buttonText: "Contact Us",
    features: [
      "Unlimited invoices",
      "Dedicated account manager",
      "Custom integrations",
      "On-premise option",
    ],
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 px-4 py-3 w-full">
      <div className="flex items-start gap-2.5 w-full">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="flex-1 bg-[#fcf9f7] border-[#e8e2ce]">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-[#1c160c] text-base leading-5">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-black text-[#1c160c] text-4xl tracking-[-1.00px] leading-[45px]">
                    {plan.price}
                  </span>
                  <span className="font-bold text-[#1c160c] text-base leading-5">
                    /month
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="h-10 w-full bg-[#f4efe5] text-[#1c160c] font-bold text-sm rounded-xl hover:bg-[#e8e2ce]"
              >
                {plan.buttonText}
              </Button>

              <div className="flex flex-col gap-2">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <CheckIcon className="w-5 h-5 text-[#1c160c]" />
                    </div>
                    <span className="text-[#1c160c] text-[13px] leading-5">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
