"use client";

import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        Ops, An error occurred while displaying this country
      </h1>
      <Link href="/" className="flex items-center py-2">
        <Image src="/iconBack.svg" height={20} width={20} alt="icon back" />
        Back
      </Link>
    </section>
  );
}
