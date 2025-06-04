import React from "react";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full">
      <div className="p-4 w-full">
        <div
          className="rounded-xl overflow-hidden w-full h-[300px] md:h-[480px] relative bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url(../depth-6--frame-0.png)",
          }}
        >
          {/* Heading */}
          <div className="absolute top-[120px] md:top-[235px] left-4 md:left-10 max-w-full md:max-w-[848px] px-2">
            <h1 className="font-black text-white text-3xl md:text-5xl tracking-[-1px] md:tracking-[-2.00px] leading-[1.2] md:leading-[60px] font-sans">
              Automate Your Invoice Workflow
            </h1>
          </div>

          {/* Description */}
          <div className="absolute top-[180px] md:top-[295px] left-4 md:left-10 max-w-full md:max-w-[848px] px-2">
            <p className="font-normal text-white text-sm md:text-base leading-5 md:leading-6 font-sans">
              InvoiceFlow streamlines your invoice processing, reducing errors
              and saving time. From creation to payment, manage every step with
              ease.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="absolute top-[240px] md:top-[371px] left-4 md:left-10 right-4 md:right-auto px-2">
            <div className="flex flex-col md:flex-row gap-3">
              <Button className="w-full md:w-auto bg-[#f9c638] text-[#1c160c] hover:bg-[#f9c638]/90 font-bold text-sm h-12 px-4 rounded-xl">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="w-full md:w-auto bg-white/80 text-[#1c160c] hover:bg-white font-bold text-sm h-12 px-4 rounded-xl"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};