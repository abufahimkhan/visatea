import Link from "next/link";

const FooterBottom = () => {
  return (
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
  );
};

export default FooterBottom;
