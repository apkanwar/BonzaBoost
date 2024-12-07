import Contact from "@/components/contact"
import FAQContent from "@/components/faqContent"
import Footer from "@/components/footer"
import RoundedNavbar from "@/components/roundedNavbar"
import Head from "next/head"

export default function FAQ() {
    return (
        <>
            <Head>
                <title>FAQ - Bonza Boost</title>
                <meta name="description" content="If you have any questions about our service, Check our our FAQ on how to get affordable server boosts."></meta>
            </Head>

            <RoundedNavbar />
            <FAQContent />
            <Contact />
            <Footer />
        </>
    )
}