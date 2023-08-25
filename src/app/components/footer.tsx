import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Fragment>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                className="h-10 w-10 mr-3"
                alt="Flowbite Logo"
                width={100}
                height={100}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                J.Rosecrans
              </span>
            </Link>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow Me
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/justin-rosecrans/myPortfolio"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.linkedin.com/in/justin-rosecrans-7b956a5a/"
                      className="hover:underline "
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/biography" className="hover:underline">
                      Biography
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="hover:underline">
                      Portfolio
                    </a>
                  </li>
                  <li className="my-4">
                    <a href="https://docs.google.com/document/d/19ags66Az6878JCfHaA6ev2xcobrB8OA5Eyh39U0t-wk/edit" className="hover:underline">
                      Resume
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="/contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 Justin Rosecrans. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
