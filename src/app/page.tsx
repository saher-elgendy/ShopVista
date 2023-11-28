import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="font-bold tracking-tight sm:text-6xl">
            Your Marketplace for high quality{" "}
            <span className="text-blue-600">digital assets</span>
          </h1>

          <p className="mt-8 text-lg max-w-prose">
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
      <section>

      </section>
    </>
  );
}
