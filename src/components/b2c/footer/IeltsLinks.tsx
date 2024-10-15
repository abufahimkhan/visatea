import Link from "next/link";

const IeltsLinks = () => {
  const links = [
    { href: "/what-is-ielts", label: "What is IELTS?" },
    { href: "/why-ielts-with-visaTea", label: "Why Take IELTS with VisaTea?" },
    { href: "/ielts-preparation", label: "IELTS Preparation" },
    { href: "/book-ielts-test", label: "Book an IELTS Test" },
  ];

  return (
    <div className="col-span-2 sm:col-span-1">
      <p className="font-medium text-gray-900">IELTS</p>
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

export default IeltsLinks;
