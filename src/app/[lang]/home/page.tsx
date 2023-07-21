import { ICommonProps } from "@/types/common";
import React from "react";
import { getDictionary } from "../../../../dictionaries";

const Page: React.FC<ICommonProps> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <div className="homepage-page">
      <h1>{dict.homepage.welcome}</h1>
      <p>{dict.homepage.greeting}</p>
      <span>current is show {lang} language</span>
    </div>
  );
};

export default Page;
