import { Link } from "react-router-dom"; // <-- added import
import type { Route } from "./+types/countries";
import Country from "./country";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return (
    <div>
      <ul>
        {loaderData.map((country, key) => (
          <li key={key}>
            <Link to="#">{country.name.common}</Link> {/* <-- added `to="#"` */}
          </li>
        ))}
      </ul>
    </div>
  );
}
