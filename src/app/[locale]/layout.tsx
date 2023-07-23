import LocaleSwitcher from "@/app/components/locale-switcher";
import "@/styles/globals.css";
import "@/styles/main.scss";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import React from "react";
import { getDictionary } from "../../../dictionaries";
import { Locale } from "../../../i18n-config";

const inter = Inter({ subsets: ["latin"] });

const HomeLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) => {
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={dict}>
          <div className="homepage">
            <div className="homepage-header">
              <LocaleSwitcher />
            </div>
            <div className="homepage-section">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default HomeLayout;
