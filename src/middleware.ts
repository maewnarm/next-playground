import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "th"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}/`
  );

  // redirect if locale not match
  if (pathnameIsMissingLocale) {
    // default locale
    const locale = "en";

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
