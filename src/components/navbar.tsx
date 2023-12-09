import { Icons } from "./icons";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import NavItems from "./nav-items";
import { buttonVariants } from "./ui/button";
import Cart from "./cart";


const Navbar = () => {
  //mocking user
  const user = null;

  return (
    <div className="sticky z-50 top-0 inset-x-0 h-16 w-full bg-white">
      <MaxWidthWrapper>
        <div className="border-b border-gray-200">
          <div className="flex h-16  justify-between items-center">
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Icons.logo className="h-10 w-10" />
              </Link>
            </div>

            <div className="relative hidden lg:block z-50 lg:ml-8 lg:self-stretch w-full">
              <NavItems />
            </div>
            <div className="flex justify-center items-center">
              {
                !user ? (
                  <Link
                    href="./sign-in"
                    className={buttonVariants({
                      variant: 'ghost'
                    })}>
                    Sign in
                  </Link>
                ) : null
              }

              {
                !user ? (
                  <Link
                    href="./sign-up"
                    className={buttonVariants({
                      variant: 'ghost'
                    })}
                  >Create Account</Link>
                ) : null
              }

              <div>
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper >
    </div >
  );
};

export default Navbar;
