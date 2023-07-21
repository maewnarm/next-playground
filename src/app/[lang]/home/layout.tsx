import LocaleSwitcher from "@/app/components/locale-switcher";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="homepage">
      <div className="homepage-header">
        <LocaleSwitcher />
      </div>
      <div className="homepage-section">{children}</div>
    </div>
  );
};

export default HomeLayout;
