import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckIcon } from "lucide-react";
import { HeroSection } from "../InvoiceflowLanding/sections/HeroSection/HeroSection";

const pricingPlans = [
  {
    name: "Basic",
    price: "$19",
    description: "Perfect for small businesses and startups",
    buttonText: "Choose Basic Plan",
    features: [
      "Up to 50 invoices per month",
      "Basic reporting and analytics",
      "Email support",
      "Single user account",
      "Standard templates",
      "Basic API access"
    ],
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for growing companies",
    buttonText: "Choose Pro Plan",
    popular: true,
    features: [
      "Unlimited invoices",
      "Advanced reporting",
      "Priority support",
      "Custom workflows",
      "Multiple user accounts",
      "Custom templates",
      "Full API access",
      "Data export"
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "Custom integrations",
      "On-premise deployment option",
      "SLA guarantee",
      "24/7 phone support",
      "Custom contract terms",
      "Security assessment"
    ],
  },
];

export const PricingPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <HeroSection />
      
      <div className="flex flex-col items-center px-4 py-16 md:py-24">
        <div className="max-w-[1200px] w-full">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-[#1c160c] tracking-tight mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-[#9e8747] max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-[#fcf9f7] border-[#e8e2ce] ${
                  plan.popular ? 'ring-2 ring-[#f9c638]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f9c638] text-[#1c160c] px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <CardContent className="flex flex-col gap-6 p-6 md:p-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#1c160c] mb-2">{plan.name}</h3>
                    <p className="text-[#9e8747] text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl md:text-5xl font-black text-[#1c160c]">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-[#9e8747]">/month</span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className={`w-full h-12 font-bold rounded-xl ${
                      plan.popular 
                        ? 'bg-[#f9c638] text-[#1c160c] hover:bg-[#f9c638]/90' 
                        : 'bg-[#f4efe5] text-[#1c160c] hover:bg-[#e8e2ce]'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3">
                        <CheckIcon className="w-5 h-5 text-[#1c160c] flex-shrink-0" />
                        <span className="text-sm text-[#1c160c]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};