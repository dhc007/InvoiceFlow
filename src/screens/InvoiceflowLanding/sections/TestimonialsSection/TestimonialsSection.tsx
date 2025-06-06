import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      id: 1,
      image: "../depth-7--frame-0.png",
      quote:
        "InvoiceFlow has transformed our accounting process. We've seen a significant reduction in errors and faster payment cycles.",
      author: "Sarah Chen, Finance Manager at Tech Innovators Inc.",
    },
    {
      id: 2,
      image: "../depth-7--frame-0-1.png",
      quote:
        "The approval workflows are a game-changer. We now have full visibility and control over our invoice approvals.",
      author: "David Lee, CFO at Global Solutions Ltd.",
    },
    {
      id: 3,
      image: "../depth-7--frame-0-2.png",
      quote:
        "The integration with our payment gateway has simplified our payment processing and reconciliation.",
      author: "Emily Rodriguez, Accounting Director at Creative Designs Co.",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="rounded-lg overflow-hidden border-none"
          >
            <div
              className="w-full h-[200px] md:h-[301px] rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${testimonial.image})` }}
            />
            <CardContent className="flex flex-col gap-2 pt-4 px-0">
              <p className="font-medium text-[#1c160c] text-sm md:text-base leading-5 md:leading-6">
                {testimonial.quote}
              </p>
              <p className="font-normal text-[#9e8747] text-xs md:text-sm leading-5 md:leading-[21px]">
                {testimonial.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};