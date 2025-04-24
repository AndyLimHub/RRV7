import type { Route } from "./+types/countries"

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({loaderData}: Route.ComponentProps) {
  console.log(loaderData)
  return <div>Countries Page</div>;
}
 