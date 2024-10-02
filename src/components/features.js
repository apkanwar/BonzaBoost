import { useRef } from 'react';
import GridContainer from './gridContainer';
import { UserGroupIcon, LightBulbIcon, BanknotesIcon, ShieldCheckIcon, CheckBadgeIcon, BoltIcon } from '@heroicons/react/24/outline';
import { useIsVisible } from '@/lib/useIsVisible';

export default function Features() {
    const applicationProcessSteps = [
        {
            "step": 1,
            "heading": "Automatic Delivery",
            "details": "You will receive your order just around 30 seconds after you place is because of our ultra-fast automatic delivery",
            "icon": <BoltIcon />
        },
        {
            "step": 2,
            "heading": "Affordable Prices",
            "details": "Our ultimate motto is that everybody, no matter where they’re from, should have high quality for affordable price",
            "icon": <LightBulbIcon />
        },
        {
            "step": 3,
            "heading": "Dedicated Support",
            "details": "We have an unparalleled chat support ready to answer your questions or concerns 24/7 every day",
            "icon": <UserGroupIcon />
        },
        {
            "step": 4,
            "heading": "Easy Payment",
            "details": "Ordering from us is easy. We accept all the major crypto, CashApp and PayPal",
            "icon": <BanknotesIcon />
        },
        {
            "step": 5,
            "heading": "Legal Methods",
            "details": "Every single service we offer is obtained through legal means so you don’t have to worry about reversals",
            "icon": <ShieldCheckIcon />
        },
        {
            "step": 6,
            "heading": "Trusted Seller",
            "details": "We constantly receive positive feedback from our customers both for services as well as our premium support",
            "icon": <CheckBadgeIcon />
        },
    ];

    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div ref={ref} id='features' className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-1000 flex flex-col items-center justify-center py-24 mx-4`}>
            <div className="max-w-7xl pb-12 items-center flex flex-col text-white">
                <h1 className="font-headings text-4xl font-bold uppercase text-center mb-6">What sets us apart from other options</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 gap-y-16 max-w-7xl mx-4'>
                {applicationProcessSteps.map(({ step, heading, details, icon }) => (
                    <GridContainer key={step} heading={heading} details={details} icon={icon} />
                ))}
            </div>
        </div>
    )
}