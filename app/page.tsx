import Image from "next/image";

type Country = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
};

async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="grid grid-cols-5 w-full container gap-6 mt-16">
      {countries.map((country) => (
        <article
          key={country.name.common}
          className="h-64 min-w-full p-2 border-2 rounded-xl hover:border-indigo-200 hover:shadow-xl transition-all"
        >
          <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt}
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-xl text-center mt-1">
            {country.name.common}
          </h1>
        </article>
      ))}
    </section>
  );
}
