import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";
import Image from "next/image";
import Profliepic from "@/public/images/profilepic.jpeg";
export default function Home() {
  return (
    <>
      <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      {/* <Testimonial /> */}
      <Pricing />
      <FAQs />

      <a
        className="fixed bottom-0 right-0 bg-base-100 bg-[#4A3876] py-2 px-4 z-10 cursor-pointer rounded-tl-xl border-t border-l border-base-content/20  border-dashed text-sm font-semibold hover:bg-base-200 duration-200 group"
        href="https://twitter.com/princeajuzie7"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row justify-center items-center text-center gap-1.5 text-[#D1D5DB]">
          <div>
            By{" "}
            <span className="link link-accent underline text-[#943CEA]">
              Prince Ajuzie
            </span>
          </div>
          <div className="avatar -mt-1 -mb-1">
            <div>
              <Image
                className="relative w-7 rounded-full group-hover:rotate-12 group-hover:scale-110 duration-300"
                alt="Prince Ajuzie"
                width={240}
                height={240}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarc.be50937c.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarc.be50937c.png&w=640&q=75 2x"
                src={Profliepic}
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
