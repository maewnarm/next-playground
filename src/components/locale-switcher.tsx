"use client";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import React from "react";
import { TbLanguageKatakana } from "react-icons/tb";
import { Locale, i18n } from "../../i18n-config";

const LocaleSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // const redirectPathname = (locale: string) => {
  //   if (!pathname) return "/";
  //   const segments = pathname.split("/");
  //   segments[1] = locale;
  //   return segments.join("/");
  // };

  // const currentLocale = () => {
  //   if (!pathname) return "/";
  //   return pathname.split("/")[1];
  // };

  const handleClick: MenuProps["onClick"] = async ({ key }) => {
    await fetch("/api/setCookie", {
      method: "POST",
      body: JSON.stringify({
        key: "locale",
        value: key,
      }),
    });

    router.push(pathname, { locale: key });
  };

  const languages: MenuProps["items"] = i18n.locales.map((loc) => ({
    label: loc.toUpperCase(),
    key: loc,
    disabled: loc === locale,
  }));

  const menuProps = {
    items: languages,
    onClick: handleClick,
  };

  return (
    <div className="local-switcher">
      <Dropdown menu={menuProps} placement="bottom">
        <TbLanguageKatakana />
      </Dropdown>
    </div>
  );
};

export default LocaleSwitcher;
