import Link from "next/link";

const UsefulLinks = () => {
  const links = [
    { href: "/news-articles", label: "News & Articles" },
    { href: "/find-course", label: "How to Find a Course" },
    { href: "/scholarships", label: "How to Find Scholarships" },
    { href: "/student-essentials", label: "Student Essentials" },
    { href: "/cost-of-living", label: "Cost of Living" },
    { href: "/ielts", label: "IELTS" },
  ];

  return (
    <div className="col-span-2 sm:col-span-1">
      <p className="font-medium text-gray-900">Useful Links</p>
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

export default UsefulLinks;
