import GradientWrapper from "@/components/GradientWrapper";
import Image from "next/image";
import NavLink from "../NavLink";
import HeroImg from "@/public/images/bgauth1.png";
import LayoutEffect from "@/components/LayoutEffect";

const Hero = () => (
  <section>
    <div className="custom-screen py-28">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div>
          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
              style={{
                backgroundImage:
                  "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
              }}
            >
              Unlock Your Team's Full Potential with Efficsync
            </h1>
            <p className="max-w-xl mx-auto text-gray-300">
              Transform the way you work with Efficsync. Say goodbye to chaos
              and hello to productivity. Click below to begin your journey
              towards organizational efficiency.
            </p>
            <div className="flex justify-center font-medium text-sm">
              <form className="flex flex-col gap-2 md:flex-row items-center justify-center">
                <div>
                  <label
                    htmlFor="email"
                    className="sr-only block text-sm font-semibold text-heading"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="block w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <button
                  // className="flex items-center text-white  py-2.5 px-4 text-center rounded-full duration-150 "
                  className="inline-flexbg-purple-600 flex   hover:bg-purple-500 active:bg-purple-700 cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <GradientWrapper
            className="mt-16 sm:mt-28 lg:px-[50px]"
            wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px]  lg:h-[650px]"
          >
            <Image
              src={HeroImg}
              // style={{
              //   filter: "blur(5px)",
              // }}
              className="shadow-lg rounded-2xl "
              alt="efficsync"
            />
          </GradientWrapper>
        </div>
      </LayoutEffect>
    </div>
  </section>
);

export default Hero;
