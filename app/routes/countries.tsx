import { Link } from "react-router-dom";
import type { Route } from "./+types/countries";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <ul>
        {loaderData.map((country: any, key: number) => (
          <li key={key}>
            <Link to={`/countries/${country.name.common}`}>
              {country.name.common}
            </Link>
            <div>
              Region: {country.region} | Population: {country.population} |
              Area: {country.area} km²
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
