"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NewHeader from "../Header/NewHeader";

interface Props {
  headerMenu: any;
  logoSettings: any;
}

const HeaderWrapper: React.FC<Props> = ({ logoSettings, headerMenu }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sortedNavItems = headerMenu
    ?.slice()
    .sort((a: any, b: any) => a.position - b.position);

  if (
    pathname.includes("checkout") ||
    pathname.includes("thank-you") ||
    pathname.includes("testing-page-for-developers-only")
  ) {
    return null;
  }

  return (
    <div>
      <NewHeader
        headerMenu={sortedNavItems}
        isHome={isHome}
        logoSettings={logoSettings}
      />
    </div>
  );
};

export default HeaderWrapper;
