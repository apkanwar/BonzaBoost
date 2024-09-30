import Head from "next/head";
import RoundedNavbar from "@/components/roundedNavbar";
import InfoSection from "@/components/infoSection";
import Features from "@/components/features";
import Contact from "@/components/contact";
import Products from "@/components/products";
import Footer from "@/components/footer";

export default function Home() {
  const BannerInfo = [
    {
      title: "Get a discounted boost supply",
      subtitle: "Get a cheap Discord boosting experience at a fraction of the cost of the normal server boosts",
      buttons: true,
      hSize: 'text-6xl'
    }
  ];
  const AboutInfo = [
    {
      title: "We are your new favorite Discord supplier",
      subtitle: "Having been in the market for more than 24 months, our server boosting service is widely acknowledged as the most reliable, respected, and renowned option in the entire industry.",
      hSize: 'text-4xl',
      listItems: [
        'The type of work required',
        'Volume of work required',
        'Regularity of the assignment (part-time or full-time)',
        'Length of the assignment (temporary or long-term)',
        'Consideration of special skill sets or certifications'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Bonza Boost</title>
      </Head>
      <RoundedNavbar links />
      <InfoSection
        id="top"
        info={BannerInfo}
        imgSrc={["/phone.png"]}
        infoSide="left"
      />
      <InfoSection
        id="about"
        info={AboutInfo}
        imgSrc={["/phone.png"]}
        infoSide="right"
      />
      <Features />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}