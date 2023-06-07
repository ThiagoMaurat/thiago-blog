import { env } from "@/env";

export async function makeFetch<T = unknown>(
  url: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<T> {
  const data = await fetch(`${env.NEXTAUTH_URL}/${url}`, init);

  const result = await data.json();

  return result;
}
