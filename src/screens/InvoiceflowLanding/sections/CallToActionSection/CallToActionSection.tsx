import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const benefits = [
  {
    icon: "/vector---0-4.svg",
    title: "Save Time",
    description:
      "Reduce manual tasks and processing time with automation, allowing your team to focus on strategic activities.",
  },
  {
    icon: "/vector---0-5.svg",
    title: "Enhance Security",
    description:
      "Ensure data security and compliance with robust encryption and access controls.",
  },
  {
    icon: "/vector---0-10.svg",
    title: "Improve Collaboration",
    description:
      "Facilitate seamless communication and collaboration among team members throughout the invoice lifecycle.",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 md:gap-10 px-4 py-8 md:py-10 w-full">
      <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
        <div className="flex flex-col items-start max-w-full md:max-w-[720px]">
          <h2 className="text-2xl md:text-4xl font-black text-[#1c160c] tracking-[-0.5px] md:tracking-[-1.00px] leading-[1.2] md:leading-[45px] font-sans">
            Benefits
          </h2>
        </div>

        <div className="flex flex-col items-start max-w-full md:max-w-[720px]">
          <p className="text-sm md:text-base font-normal text-[#1c160c] leading-5 md:leading-6 font-sans">
            Experience the advantages of a streamlined invoice workflow.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="bg-[#fcf9f7] border-[#e8e2ce] rounded-lg"
          >
            <CardContent className="p-4 flex flex-col gap-3">
              <div className="w-full">
                <div
                  className="w-6 h-6"
                  style={{
                    backgroundImage: `url(${benefit.icon})`,
                    backgroundSize: "100% 100%",
                  }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-[#1c160c] leading-5 font-sans">
                  {benefit.title}
                </h3>
                <p className="text-sm font-normal text-[#9e8747] leading-[21px] font-sans">
                  {benefit.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};