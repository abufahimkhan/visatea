import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    { href: "#", icon: <FaFacebookF />, label: "Facebook" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
    { href: "#", icon: <FaTwitter />, label: "Twitter" },
    { href: "#", icon: <FaGithub />, label: "GitHub" },
    { href: "#", icon: <FaDribbble />, label: "Dribbble" },
  ];

  return (
    <ul className="mt-8 flex justify-start gap-6 lg:justify-end">
      {socialLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">{link.label}</span>
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
