export default function handler(req, res) {
    const products = [
        {
            category: '1 Month Boost',
            type: [
                {
                    name: '2 Boosts',
                    price: '$2.99',
                    id: '66fc7df2d2ea1',
                    desc: [
                        'Level 1 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '8 Boosts',
                    price: '$7.99',
                    id: '66fc7d49da746',
                    desc: [
                        'Level 2 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '10 Boosts',
                    price: '$9.99',
                    id: '66fc7d1ba9f09',
                    desc: [
                        'Level 2 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '14 Boosts',
                    price: '$12.49',
                    id: '66f6195161813',
                    desc: [
                        'Level 3 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                }
            ]
        },
        {
            category: '3 Month Boost',
            type: [
                {
                    name: '2 Boosts',
                    price: '$4.99',
                    id: '66fc7e258ebed',
                    desc: [
                        'Level 1 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '8 Boosts',
                    price: '$14.99',
                    id: '66fc83692eee6',
                    desc: [
                        'Level 2 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '10 Boosts',
                    price: '$17.99',
                    id: '66fc838c69eb4',
                    desc: [
                        'Level 2 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '14 Boosts',
                    price: '$21.99',
                    id: '66fc83ca90bbd',
                    desc: [
                        'Level 3 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                }
            ]
        },
        {
            category: '6 Month Boost',
            type: [
                {
                    name: '4 Boosts',
                    price: '$12.99',
                    id: '66fc8471dd4b7',
                    desc: [
                        'Level 1 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '8 Boosts',
                    price: '$28.99',
                    id: '66fc844a07733',
                    desc: [
                        'Level 2 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '10 Boosts',
                    price: '$33.99',
                    id: '66fc840bbf0d3',
                    desc: [
                        'Level 2 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '14 Boosts',
                    price: '$39.99',
                    id: '66fc83ecd3836',
                    desc: [
                        'Level 3 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                }
            ]
        },
        {
            category: '1 Year Boost',
            type: [
                {
                    name: '8 Boosts',
                    price: '$49.99',
                    id: '66fc8498cc3ad',
                    desc: [
                        'Level 2 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '10 Boosts',
                    price: '$59.99',
                    id: '66fc84cf82556',
                    desc: [
                        'Level 2 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '14 Boosts',
                    price: '$74.99',
                    id: '66fc84f496c07',
                    desc: [
                        'Level 3 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '30 Boosts',
                    price: '$99.99',
                    id: '66fc8510cdfd2',
                    desc: [
                        'Level 3 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                }
            ]
        },
        {
            category: 'Lifetime Boost',
            type: [
                {
                    name: '14 Boosts',
                    price: '$119.99',
                    id: '66fc8538753fa',
                    desc: [
                        'Level 3 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: '30 Boosts',
                    price: '$149.99',
                    id: '66fc855196ee5',
                    desc: [
                        'Level 3 Boost',
                        'Instant Delivery',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                }
            ]
        },
        {
            category: 'Members',
            type: [
                {
                    name: 'Offline Members',
                    price: '$6/300',
                    id: '66fc8b2d76974',
                    desc: [
                        'Lifetime Warranty',
                        'Profile Pictures',
                        'Realistic Names'
                    ]
                },
                {
                    name: 'Online Members',
                    price: '$6/100',
                    id: '66fc8bfa2b9f8',
                    desc: [
                        'Lifetime Warranty',
                        'Profile Pictures',
                        'Realistic Names'
                    ]
                },
                {
                    name: 'Premium Members',
                    price: '$8/100',
                    id: '66fc8dc50b6fd',
                    desc: [
                        'Lifetime Warranty',
                        'Profile Pictures',
                        'Realistic Names',
                        'Unique Custom Status'
                    ]
                },
                {
                    name: 'Reaction Members',
                    price: '$6/100',
                    id: '66fc8e1d0d504',
                    desc: [
                        'Lifetime Warranty',
                        'Profile Pictures',
                        'Realistic Names',
                        'Button & Emoji Reactions'
                    ]
                },

            ]
        },
        {
            category: 'Nitro',
            type: [
                {
                    name: 'Discord Nitro | 1 Month',
                    price: '$5.99',
                    id: '66fc88c9be49e',
                    desc: [
                        'Works for all users',
                        'Comes with 2 Boosts',
                        'Full Warranty',
                    ]
                },
                {
                    name: 'Discord Nitro | 3 Months',
                    price: '$7.49',
                    id: '66fc893367827',
                    desc: [
                        'Works for new nitro users',
                        'Comes with 2 Boosts',
                        'Full Warranty',
                    ]
                },
                {
                    name: 'Dicord Nitro | 1 Year',
                    price: '$34.99',
                    id: '66fc89bda274f',
                    desc: [
                        'Works for all users',
                        'Comes with 2 Boosts',
                        'Full Warranty',
                    ]

                },
                {
                    name: 'Nitro Basic | 1 Year',
                    price: '$19.99',
                    id: '66fc8a6f37242',
                    desc: [
                        'Works for all users',
                        'Full Warranty',
                    ]
                },

            ]
        },
        {
            category: 'YouTube',
            type: [
                {
                    name: 'YouTube Premium | 1 Months',
                    price: '$4.99',
                    id: ' 66fc85a99b06b',
                    desc: [
                        'Works on you main account',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: 'YouTube Premium | 3 Months',
                    price: '$12.99',
                    id: '66fc8636ee292',
                    desc: [
                        'Works on you main account',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]

                },
                {
                    name: 'YouTube Premium | 6 Months',
                    price: '$24.99',
                    id: '66fc8803b09dd',
                    desc: [
                        'Works on you main account',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },
                {
                    name: 'Youtube Premium | 1 Year',
                    price: '$39.99',
                    id: '66fc8877cbacb',
                    desc: [
                        'Works on you main account',
                        '100% Legally Obtained',
                        'Full Warranty',
                    ]
                },

            ]
        },

    ]
    res.status(200).json({ products })
}