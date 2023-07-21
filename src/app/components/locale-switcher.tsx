"use client";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { TbLanguageKatakana } from "react-icons/tb";
import { i18n } from "../../../i18n-config";

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const redirectPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const currentLocale = () => {
    if (!pathname) return "/";
    return pathname.split("/")[1];
  };

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    router.push(redirectPathname(key));
  };

  const languages: MenuProps["items"] = i18n.locales.map((locale) => ({
    label: locale.toUpperCase(),
    key: locale,
    disabled: currentLocale() === locale,
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
