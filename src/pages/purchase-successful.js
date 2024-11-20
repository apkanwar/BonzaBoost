import Head from "next/head"
import RoundedNavbar from "@/components/roundedNavbar"
import Confetti from "@/components/confetti"
import Footer from "@/components/footer"

export default function PurchaseSuccessful() {
    return (
        <>
            <Head>
                <title>Purchase Successful - Bonza Boost</title>
            </Head>

            <RoundedNavbar faq />
            <Confetti />
            <Footer />
        </>
    )
}