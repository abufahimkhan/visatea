import Link from "next/link";
import React from "react";
import servicesData from "@/components/utils/data/ServiceData";
import { nanoid } from "nanoid";

const Services = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 items-center justify-center">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find your career path
            </h2>
            <p className="mt-4 text-gray-600">
              Begin an exciting academic journey in these varied and welcoming
              study locations!
            </p>
            <Link
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {servicesData.map((service, index) => (
              <Link
                key={nanoid()}
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <service.icon color={service.color} size={24} />{" "}
                  {/* Render the icon with specific color */}
                </span>

                <h2 className="mt-2 font-bold">{service.title}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
