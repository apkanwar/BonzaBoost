import Footer from "@/components/footer"
import RoundedNavbar from "@/components/roundedNavbar"
import TOS from "@/components/tos"
import Head from "next/head"

export default function FAQ() {
    return (
        <>
            <Head>
                <title>ToS - Bonza Boost</title>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Your Page Title" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="format-detection" content="telephone=no" />
            </Head>

            <RoundedNavbar />
            <TOS />
            <Footer />
        </>
    )
}