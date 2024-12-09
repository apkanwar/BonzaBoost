import { useIsVisible } from "@/lib/useIsVisible";
import Link from "next/link";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div ref={ref} className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-1000 py-24`}>
      <section className="mx-4 xl:mx-auto max-w-5xl flex flex-col justify-center items-center rounded-xl shadow-xl bg-dPurple">
        <div className="px-8 py-24 w-full flex flex-col text-center justify-center items-center bg-gray-400/30 rounded-t-xl">
          <p className="font-main font-semibold text-white text-2xl">
            Get in touch with our support team instantly
          </p>
          <p className="font-main font-semibold text-white text-2xl">
            ___
          </p>
          <p className="font-main text-white text-lg pt-4 max-w-2xl text-center">
            Do you have any questions or concerns, or do you need help with your order? Join our server by clicking below.
          </p>
        </div>
        <div className="p-8 w-full flex flex-col lg:flex-row gap-4 justify-center items-center rounded-b-xl">
          <Link href={'https://discord.gg/Bonzaboost'} className="font-semibold text-center text-2xl text-white px-12 py-4 border-solid border-4 rounded-full hover:bg-dMode transition ease-in duration-200">
            Join the Discord
          </Link>
        </div>
      </section>
    </div>
  )
}