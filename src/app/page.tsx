import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowDownToLine,
  CheckCircle,
  ArrowUp01,
  Leaf,
  HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/navbar";

export default function Home() {
  const services = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownToLine,
      description:
        "Get your assets delievered to your email in seconds and download them right a way",
    },
    {
      name: "Guaranteed Quality",
      Icon: CheckCircle,
      description:
        "Every asset quality in our collection is verified and ensured by our team against highest quality standards.",
    },

    {
      name: "For the people",
      Icon: HeartHandshake,
      description: "We pledge 1% of our income to the charities ",
    },
    //  TODO: experimenting with fourth item
    // {
    //   name: "Instant Delivery",
    //   Icon: ArrowUp01,
    //   description:
    //     "get your assets delievered to your email in seconds and download them right a way.",
    // },
  ];

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="font-bold tracking-tight sm:text-6xl">
            Your Marketplace for high quality{" "}
            <span className="text-blue-600">digital assets</span>
          </h1>

          <p className="mt-8 text-lg max-w-prose text-muted-foreground">
            Welcome to ShopVista, quality of our products is ensured and
            guaranteed, you can shop anything anytime, we're always in the
            service
          </p>

          <div className="flex flex-col sm:flex-row mt-6 gap-4">
            <Link href="/products" className={buttonVariants()}>
              Trending
            </Link>
            <Button>Our Quality Promise &rarr;</Button>
          </div>

          {/* TODO: List Products */}
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-4 ">
            {services.map((service) => (
              <div key={service.name} className="text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex justify-center items-center md:self-center rounded-full bg-blue-100 text-blue-900">
                    <service.Icon className="w-1/3 h-1/3" />
                  </div>
                </div>

                <div className="mt-6 md:ml-4 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-md text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
