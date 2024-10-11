"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing mobile icons for open/close
import { Button } from "../../ui/button";
import { Images } from "../../utils/image";

export function MenuBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenubarFixed, setIsMenubarFixed] = useState(false); // State to track menubar fix

  const handleButtonLoading = () => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll event listener to toggle menubar fixed
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        // Adjust this value for when the Menubar should become fixed
        setIsMenubarFixed(true);
      } else {
        setIsMenubarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full flex justify-between items-center px-6 py-8 lg:px-10 lg:py-5 bg-white z-50">
      {/* Logo and Free Advice Button */}
      <div className="flex items-center space-x-4 lg:space-x-8">
        {/* Logo */}
        <Image
          src={Images.logo}
          alt="Logo"
          loading="lazy"
          className="relative bottom-4 w-24 lg:w-36 h-auto"
        />

        {/* Menubar - Hidden on small devices, visible on larger screens */}
        <Menubar
          className={`hidden border-none shadow-none lg:flex py-6 lg:text-lg ${
            isMenubarFixed
              ? "fixed top-0 left-1/2 transform -translate-x-1/2 items-center underline justify-center bg-sky-500 py-5 text-white font-bold text-2xl z-50"
              : ""
          }`}
        >
          <MenubarMenu>
            <MenubarTrigger>Study abroad steps</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Study destinations</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Find a course</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Reload</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>IELTS</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Edit...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Student Essentials</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Edit...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Free Advice Button */}
      <div className="flex items-center justify-end gap-8">
        <Button
          disabled={isLoading}
          onClick={handleButtonLoading}
          className="w-auto bg-sky-500 rounded-full px-6 py-4 text-sm lg:px-12 lg:py-6 lg:text-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 animate-spin" />
              Please wait
            </>
          ) : (
            "Free Advice Session"
          )}
        </Button>

        {/* Mobile Menu Toggle (visible on small devices) */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Visible on small devices */}
      {isMobileMenuOpen && (
        <div className="absolute top-40 right-8 shadow-2xl w-72 h-64 bg-white p-8 rounded-lg lg:hidden z-50">
          <Menubar className="flex flex-col space-y-4">
            <MenubarMenu>
              <MenubarTrigger>Study abroad steps</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab</MenubarItem>
                <MenubarItem>New Window</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Study destinations</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Find a course</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Reload</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>IELTS</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Edit...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Student Essentials</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Edit...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      )}
    </header>
  );
}
