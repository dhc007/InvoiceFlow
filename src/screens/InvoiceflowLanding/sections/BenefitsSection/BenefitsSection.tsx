import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-10">
      <Card className="border-0 shadow-none">
        <CardContent className="flex flex-col items-center justify-center gap-6 md:gap-8 p-0">
          <div className="flex flex-col items-center text-center max-w-full md:max-w-[720px] mx-auto px-4">
            <h2 className="font-black text-2xl md:text-4xl text-[#1c160c] tracking-[-0.5px] md:tracking-[-1px] leading-[1.2] md:leading-[45px]">
              Ready to Streamline Your Invoice Workflow?
            </h2>
            <p className="mt-2 font-normal text-sm md:text-base text-[#1c160c] leading-5 md:leading-6">
              Start your free trial today and experience the power of
              InvoiceFlow.
            </p>
          </div>

          <div className="flex justify-center w-full px-4">
            <Button className="w-full md:w-auto bg-[#f9c638] text-[#1c160c] hover:bg-[#f9c638]/90 font-bold rounded-xl px-5 h-12">
              Get Started
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};