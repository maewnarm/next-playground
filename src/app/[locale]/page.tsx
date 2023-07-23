"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Home = () => {
  const t = useTranslations("main");
  const locale = useLocale();

  return (
    <div className="homepage-page">
      <h1>{t("welcome")}</h1>
      <p>{t("greeting")}</p>
      <span>current is show {locale} language</span>
    </div>
  );
};

export default Home;
