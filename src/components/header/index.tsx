"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header: React.FC = () => {
  const { user, isLoaded } = useUser();

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <Link href="/">
          <div className="flex items-center">
            <div className="h-8 w-8 mr-2 bg-blue-500" />

            <h1 className="flex items-center text-1xl font-extrabold dark:text-white">
              Every Purchase
              <span className="bg-blue-100 text-blue-800 text-0.1xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                PRO
              </span>
            </h1>
          </div>
        </Link>
        <div className="flex items-center justify-between p-4">
          {isLoaded && user ? (
            <Link href="/dashboard">
              <div className="mr-4">Dashboard</div>
            </Link>
          ) : (
            <Link href="/dashboard">
              <div className="mr-4">Sign In</div>
            </Link>
          )}

          {isLoaded && user && (
            <>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
