import Link from "next/link";

const WhatWeDo = () => {
  const links = [
    { href: "/study-abroad-counselling", label: "Study Abroad Counselling" },
    { href: "/careers", label: "Careers" },
    { href: "/living-abroad-support", label: "Living Abroad Support" },
  ];

  return (
    <div className="col-span-2 sm:col-span-1">
      <p className="font-medium text-gray-900">What We Do</p>
      <ul className="mt-6 space-y-4 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-700 transition hover:opacity-75"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatWeDo;
