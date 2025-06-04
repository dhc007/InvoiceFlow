import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const KeyFeaturesSection = (): JSX.Element => {
  // Footer navigation links data
  const footerLinks = [
    { title: "Product" },
    { title: "Solutions" },
    { title: "Resources" },
    { title: "Pricing" },
    { title: "Contact Us" },
    { title: "Terms of Service" },
    { title: "Privacy Policy" },
  ];

  return (
    <footer className="w-full flex justify-center">
      <div className="flex flex-col max-w-[960px] w-full">
        <div className="flex flex-col items-center gap-6 px-5 py-10 w-full">
          <nav className="flex flex-wrap justify-center gap-6 w-full">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-normal text-[#9e8747] text-base text-center leading-6 hover:underline"
              >
                {link.title}
              </a>
            ))}
          </nav>

          <Separator className="bg-[#9e8747] opacity-20" />

          <div className="w-full text-center">
            <p className="font-normal text-[#9e8747] text-base leading-6">
              © 2025 InvoiceFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
