import Head from "next/head"
import RoundedNavbar from "@/components/roundedNavbar"
import Confetti from "@/components/confetti"
import Footer from "@/components/footer"
// import { GoogleTagManager } from "@next/third-parties/google"

export default function PurchaseSuccessful() {
    return (
        <>
            <Head>
                <title>Purchase Successful - Bonza Boost</title>
                <meta name="description" content="Congrats on your successful purchase! Enjoy your product and let us know if you want anything else."></meta>
            </Head>
            {/* <GoogleTagManager gtmId="AW-16778799212" /> */}
            <RoundedNavbar faq />
            <Confetti />
            <Footer />
        </>
    )
}