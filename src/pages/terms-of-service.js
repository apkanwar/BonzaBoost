import Footer from "@/components/footer"
import RoundedNavbar from "@/components/roundedNavbar"
import TOS from "@/components/tos"
import { NextSeo } from "next-seo"
import Head from "next/head"

export default function FAQ() {
    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Your Page Title" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="format-detection" content="telephone=no" />
            </Head>
            <NextSeo
                title="Bonza Boost | ToS"
                description='Bonza Boost is the place to safely purchase cheap and affordable server boosts.'
                canonical='https://www.bonzaboost.cc/terms-of-service'
                openGraph={{
                    url: 'https://www.bonzaboost.cc/terms-of-service',
                    title: "Bonza Boost | ToS",
                    description: 'Bonza Boost is the place to safely purchase cheap and affordable server boosts.',
                    images: [
                        {
                            url: '/logo.png',
                            width: 500,
                            height: 500,
                            alt: 'BonzaBoost Logo',
                            type: 'image/png'
                        }
                    ],
                    siteName: 'Bonza Boost'
                }}
            />

            <RoundedNavbar />
            <TOS />
            <Footer />
        </>
    )
}