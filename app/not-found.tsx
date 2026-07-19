import CtaButton from "./components/CtaButton";
import Navbar from "./components/Navbar";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center bg-white dark:bg-black w-full">
      <Navbar />
      <section className="bg-background min-h-[80vh] w-full flex flex-col items-center justify-center pt-24 sm:pt-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            <div
              className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain"
              aria-hidden="true"
            >
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl text-foreground sm:text-3xl font-medium tracking-tight mb-4">
                Looks like you're lost
              </h3>
              <p className="mb-6 text-muted-foreground sm:mb-5">
                The page you are looking for is not available!
              </p>
              
              <div className="flex justify-center mt-5">
                <CtaButton label="Go to Home" href="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

