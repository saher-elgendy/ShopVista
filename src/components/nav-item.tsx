// import { PRODUCT_CATEGORIES } from "@/local-data";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/local-data";
import Link from "next/link";

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
  return (
    <div className="flex items-center">
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
        <div className="absolute inset-x-0 top-full  bg-white shadow p-8">
          <div className="grid grid-cols-3 gap-x-8 gap-y-10">
            {category.details.map((item) => {
              return (
                <div className=" ">
                  <div className="relative h-64">
                    <Image
                      src={item.imageSrc}
                      alt="product-category"
                      layout="fill"
                      objectFit="contain"
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