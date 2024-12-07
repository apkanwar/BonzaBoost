import Head from "next/head";
import RoundedNavbar from "@/components/roundedNavbar";
import InfoSection from "@/components/infoSection";
import Features from "@/components/features";
import Contact from "@/components/contact";
import Products from "@/components/products";
import Footer from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  const BannerInfo = [
    {
      title: "Get Server Boosts at a Discount",
      subtitle: "Get a cheap Discord boosting experience at a fraction of the cost of the normal server boosts",
      buttons: true,
      hSize: 'text-6xl'
    }
  ];
  const AboutInfo = [
    {
      title: "We are your new favorite Discord supplier",
      subtitle: "Having been in the market for more than 2 years, our server boosting service is widely acknowledged as the most reliable, respected, and renowned option in the entire industry.",
      hSize: 'text-[48px]',
      listItems: [
        'Affordable Pricing',
        'Automatic delivery',
        'Premium Customer Support'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Bonza Boost</title>
        <meta name="description" content="Bonza Boost is the place to safely get cheap and affordable server boosts."></meta>
      </Head>
      <GoogleTagManager gtmId="AW-16778799212" />
      <RoundedNavbar links />
      <InfoSection
        id="top"
        info={BannerInfo}
        imgSrc={[{
          url: "/phone.png",
          size: "300",
          rounded: ""
        }]}
        infoSide="left"
      />
      <InfoSection
        id="about"
        info={AboutInfo}
        imgSrc={[{
          url: "/boostRing.png",
          size: "400",
          rounded: "rounded-full"
        }]}
        imgSize={300}
        rounded
        infoSide="right"
      />
      <Features />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}