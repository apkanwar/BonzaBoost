import Contact from "@/components/contact"
import FAQContent from "@/components/faqContent"
import Footer from "@/components/footer"
import RoundedNavbar from "@/components/roundedNavbar"
import Head from "next/head"

export default function FAQ() {
    return (
        <>
            <Head>
                <title>Ensured Employment</title>
            </Head>

            <RoundedNavbar />
            <FAQContent />
            <Contact />
            <Footer />
        </>
    )
}