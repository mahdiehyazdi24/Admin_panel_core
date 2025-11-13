"use server";
import { cookies } from "next/headers";

/**
 * Retrieves cookies from the incoming request during server-side rendering (SSR) in Next.js App Router.
 *
 * This utility is useful when making SSR fetches to internal or external APIs that require
 * authentication or session context, since cookies are not automatically forwarded like they are in client-side requests.
 *
 * Usage:
 *   const cookieHeader = await getClientCookies();
 *   fetch("https://api.example.com/profile", { headers: { Cookie: cookieHeader } });
 */
export const getClientCookies = async () => {
  const cookieHeader = (await cookies())
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  return cookieHeader;
};
