import Contact from "@/components/contact"
import FAQContent from "@/components/faqContent"
import Footer from "@/components/footer"
import RoundedNavbar from "@/components/roundedNavbar"
import { NextSeo } from "next-seo"

export default function FAQ() {
    return (
        <>
            <NextSeo
                title="Bonza Boost | FAQ"
                description='Bonza Boost is the place to safely purchase cheap and affordable server boosts.'
                canonical='https://www.bonzaboost.cc/faq'
                openGraph={{
                    url: 'https://www.bonzaboost.cc/faq',
                    title: "Bonza Boost | FAQ",
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
            <FAQContent />
            <Contact />
            <Footer />
        </>
    )
}