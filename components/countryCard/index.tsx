import Image from "next/image";
import Link from "next/link";

export default function CountryCard({
  name,
  flag,
  flagAlt,
}: {
  name: string;
  flag: string;
  flagAlt: string;
}) {
  return (
    <Link href={`/country/${name}`}>
      <article
        className="h-64 min-w-full p-2 border-2 rounded-xl hover:border-indigo-200 hover:shadow-xl transition-all"
        key={name}
      >
        <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
          <Image src={flag} alt={flagAlt} fill className="object-cover" />
        </div>
        <h1 className="font-bold text-xl text-center mt-1">{name}</h1>
      </article>
    </Link>
  );
}
