import React from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const PricingIntroSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#1c160c] tracking-[-1.00px] leading-[1.2] md:leading-[45px] mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-[#9e8747] max-w-2xl mx-auto mb-8">
          Starting at just $19/month
        </p>
        <Link to="/pricing">
          <Button className="w-full md:w-auto bg-[#f9c638] text-[#1c160c] hover:bg-[#f9c638]/90 font-bold text-sm h-12 px-8 rounded-xl">
            Check Our Plans
          </Button>
        </Link>
      </div>
    </section>
  );
};