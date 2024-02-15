import React from "react";
import Link from "next/link";
import type { NextPage } from "next";

export const metadata = {
  title: `Devine`,
  description: `Delightful dev tools for React`,
};

const HomePage: NextPage = () => (
  <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
    <h1 className="text-4xl font-medium">Devine</h1>
    <p className="text-zinc-500">Delightful dev tools for React</p>
    <Link
      href="https://github.com/kiahjh/devine"
      className="text-blue-500 underline"
    >
      repo
    </Link>
  </main>
);

export default HomePage;
