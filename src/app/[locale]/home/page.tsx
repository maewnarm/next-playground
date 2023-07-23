"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("homepage");

  return (
    <div className="homepage-page">
      <h1>{t("welcome")}</h1>
      <p>{t("greeting")}</p>
    </div>
  );
};

export default Page;
