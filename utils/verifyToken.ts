"use server";

import { getNewToken } from "@/services/AuthServices.ts";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const isTokenExpired = async (token: string): Promise<boolean> => {
  if (!token) return true;

  try {
    const decoded: { exp: number } = jwtDecode(token);

    return decoded.exp * 1000 < Date.now();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err);
    return true;
  }
};

export const getValidToken = async (): Promise<string> => {
  const cookieStore = await cookies();
  const accessTokenCookie = cookieStore.get("event_planner_token");

  if (!accessTokenCookie) {
    return "";
  }

  let token = accessTokenCookie.value;

  if (!token || (await isTokenExpired(token))) {
    const { data } = await getNewToken();
    token = data?.accessToken;
    cookieStore.set("event_planner_token", token);
  }

  return token;
};
