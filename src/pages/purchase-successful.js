import RoundedNavbar from "@/components/roundedNavbar"
import Confetti from "@/components/confetti"
import Footer from "@/components/footer"
import { NextSeo } from "next-seo"

export default function PurchaseSuccessful() {
    return (
        <>
            <NextSeo
                title="Bonza Boost | Purchase Successfull"
                description='Bonza Boost is the place to safely purchase cheap and affordable server boosts.'
                canonical='https://www.bonzaboost.cc/purchase-successfull'
                openGraph={{
                    url: 'https://www.bonzaboost.cc/purchase-successfull',
                    title: "Bonza Boost | Purchase Successfull",
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

            <RoundedNavbar faq />
            <Confetti />
            <Footer />
        </>
    )
}