"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Images } from "@/components/utils/image";
import Image from "next/image";
import Link from "next/link";
import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600">
            <Image
              src={Images.logo}
              alt="Logo"
              loading="lazy"
              className="relative bottom-4 w-24 lg:w-40 h-auto"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Passport to Global Opportunities with VisaTea!
                </h2>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <Label htmlFor="UserEmail" className="sr-only">
                  Email
                </Label>

                <div className="border bg-white rounded-lg p-2 sm:flex sm:items-center sm:gap-4">
                  <Input
                    type="email"
                    id="UserEmail"
                    placeholder="john@visaTea.com"
                    className="w-full border-none outline-none sm:text-sm"
                  />

                  <Button className="mt-1 w-full bg-sky-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-sky-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">What We Do</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/study-abroad-counselling"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Study Abroad Counselling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/living-abroad-support"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Living Abroad Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Useful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/news-articles"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    News & Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/find-course"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    How to Find a Course
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scholarships"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    How to Find Scholarships
                  </Link>
                </li>
                <li>
                  <Link
                    href="/student-essentials"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Student Essentials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cost-of-living"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Cost of Living
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ielts"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    IELTS
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">IELTS</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/what-is-ielts"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    What is IELTS?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/why-ielts-with-visaTea"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Why Take IELTS with VisaTea?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ielts-preparation"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    IELTS Preparation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-ielts-test"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Book an IELTS Test
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Connect with VisaTea</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/visaTea-events"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    VisaTea Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/visaTea-offices"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    VisaTea Offices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-responsibility"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Corporate Responsibility
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-visaTea-corporate"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    About VisaTea Corporate
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>
                  <FaDribbble />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2022. VisaTea. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
