"use client";

import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";
import { Button, Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Fragment>
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="/">
      <Image
              src="/logo.jpg"
              className="h-10 w-10 mr-3"
              alt="Justin Rosecrans Portfolio Logo"
              width={100}
              height={100}
            />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Welcome
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="/biography">
          About Me
        </Navbar.Link>
        <Navbar.Link href="/portfolio">
          Portfolio
        </Navbar.Link>
        <Navbar.Link href="https://docs.google.com/document/d/19ags66Az6878JCfHaA6ev2xcobrB8OA5Eyh39U0t-wk/edit">
          Resume
        </Navbar.Link>
        <Navbar.Link href="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </Fragment>
  );
}
