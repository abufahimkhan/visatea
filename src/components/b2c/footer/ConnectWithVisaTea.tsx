import Link from "next/link";

const ConnectWithVisaTea = () => {
  const links = [
    { href: "/visaTea-events", label: "VisaTea Events" },
    { href: "/visaTea-offices", label: "VisaTea Offices" },
    { href: "/corporate-responsibility", label: "Corporate Responsibility" },
    { href: "/about-visaTea-corporate", label: "About VisaTea Corporate" },
  ];

  return (
    <div className="col-span-2 sm:col-span-1">
      <p className="font-medium text-gray-900">Connect with VisaTea</p>
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

export default ConnectWithVisaTea;
