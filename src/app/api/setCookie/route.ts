import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { key, value } = await req.json();

  // set cookie
  const cookieStore = cookies();
  cookieStore.set(key, value);

  return NextResponse.json({ data: "success" }, { status: 200 });
}
