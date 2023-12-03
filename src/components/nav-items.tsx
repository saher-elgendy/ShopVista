"use client";

import { useState } from "react";
import NavItem from "./nav-item";
import { PRODUCT_CATEGORIES } from "@/local-data";


const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleOpen = (idx: number) => {
    setActiveIndex(idx);
  };

  const close = () => setActiveIndex(null);

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        return (
          <NavItem
            category={category}
            isOpen={i === activeIndex}
            isAnyOpen={activeIndex !== null}
            handleOpen={() => handleOpen(i)}
            close={close}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
