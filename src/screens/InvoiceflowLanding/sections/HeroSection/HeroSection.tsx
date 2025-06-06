import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Features", path: "/#features" },
    { name: "Solutions", path: "/#solutions" },
    { name: "Resources", path: "/#resources" },
    { name: "Pricing", path: "/pricing" },
  ];

  const scrollToSection = (path: string) => {
    if (path.startsWith('/#')) {
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-3 border-b border-[#e5e8ea] w-full relative">
      {/* Logo and Brand Name */}
      <Link to="/" className="flex items-center gap-2 md:gap-4">
        <div className="hidden md:flex items-start">
          <div className="w-4 h-4 bg-[url(/vector---0.svg)] bg-[100%_100%]" />
        </div>
        <div>
          <h1 className="font-bold text-base md:text-lg text-[#1c160c] font-sans">
            InvoiceFlow
          </h1>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-[#1c160c]" />
        ) : (
          <Menu className="h-6 w-6 text-[#1c160c]" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-end gap-8 flex-1">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-9">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.path.startsWith('/#') ? (
                  <button
                    onClick={() => scrollToSection(item.path)}
                    className="font-medium text-sm text-[#1c160c] hover:text-[#1c160c]/80"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link to={item.path}>
                    <NavigationMenuLink className="font-medium text-sm text-[#1c160c]">
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button className="h-10 px-4 py-0 font-bold text-sm text-[#1c160c] bg-[#f9c638] hover:bg-[#f9c638]/90 rounded-xl">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="h-10 w-[84px] px-4 py-0 font-bold text-sm text-[#1c160c] bg-[#f4efe5] hover:bg-[#f4efe5]/90 border-none rounded-xl"
          >
            Login
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.path.startsWith('/#')) {
                    scrollToSection(item.path);
                  } else {
                    window.location.href = item.path;
                  }
                }}
                className="px-6 py-3 text-left text-[#1c160c] hover:bg-[#fcf9f7]"
              >
                {item.name}
              </button>
            ))}
            <div className="flex flex-col gap-2 px-4 pt-4">
              <Button className="h-12 w-full font-bold text-sm text-[#1c160c] bg-[#f9c638] hover:bg-[#f9c638]/90 rounded-xl">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="h-12 w-full font-bold text-sm text-[#1c160c] bg-[#f4efe5] hover:bg-[#f4efe5]/90 border-none rounded-xl"
              >
                Login
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};