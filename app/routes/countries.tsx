import { Link } from "react-router-dom";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  // function name= Countries, props= { loaderData: any }, Route.ComponentProps = typescript type and the whole thing is component signature
  const [search, setSearch] = useState<string>("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesSearch = !search || country.name.common.includes(search);
    return matchesSearch;
  });
  return (
    <div>
      <div>
        <h2>Countries</h2>
        <div>
          <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <ul>
        {filteredCountries.map((country: any, key: number) => (
          <li key={key}>
            <Link to={`/countries/${country.name.common}`}>
              {country.name.common}
            </Link>
            <div>
              Region: {country.region} | Population: {country.population}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
