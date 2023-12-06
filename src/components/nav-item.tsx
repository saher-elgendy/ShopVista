// import { PRODUCT_CATEGORIES } from "@/local-data";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/local-data";
import Link from "next/link";
import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/use-onclick-outside";



type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  close: () => void;
  handleOpen: () => void;
  isOpen: Boolean;
  isAnyOpen: Boolean;
}

const NavItem = ({
  category,
  close,
  handleOpen,
  isOpen,
  isAnyOpen,
}: NavItemProps) => {

  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, close);

  return (
    <div className="flex items-center" ref={navRef}>
      <Button
        className="gap-1.5 flex justify-center"
        onClick={handleOpen}
        variant={isOpen ? "secondary" : "ghost"}
      >
        {category.label}
        <ChevronDown
          className={cn("h4 w-4 transition-all text-muted-foreground", {
            "-rotate-180": isOpen,
          })}
        />
      </Button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-full  bg-white shadow p-9 animate-in fade-in-5" onClick={close}>
          <div className="grid grid-cols-3 gap-x-8 gap-y-10">
            {category.details.map((item) => {
              return (
                <div className="">
                  <div className="relative lg:h-64 md:h-48">
                    <Image
                      src={item.imageSrc}
                      alt="product-category"
                      layout="fill"
                      className="object-contain"
                    />
                  </div>
                  <div className=" bg-white">
                    <Link href="#" className="font-medium text-sm">
                      {item.name}
                    </Link>
                    <p className="text-gray-500 text-sm text-muted-foreground">Shop Now</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;