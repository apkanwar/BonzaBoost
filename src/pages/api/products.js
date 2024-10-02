export default function handler(req, res) {
    const products = [
        {
            category: '1 Month Boost',
            type: [
                {
                    name: '2 Boosts',
                    price: '$2.99',
                    id: ''
                },
                {
                    name: '8 Boosts',
                    price: '$7.99',
                    id: ''
                },
                {
                    name: '10 Boosts',
                    price: '$9.99',
                    id: ''
                },
                {
                    name: '14 Boosts',
                    price: '$12.49',
                    id: ''
                }
            ]
        },
        {
            category: '3 Month Boost',
            type: [
                {
                    name: '2 Boosts',
                    price: '$4.99',
                    id: ''
                },
                {
                    name: '8 Boosts',
                    price: '$14.99',
                    id: ''
                },
                {
                    name: '10 Boosts',
                    price: '$17.99',
                    id: ''
                },
                {
                    name: '14 Boosts',
                    price: '$21.99',
                    id: ''
                }
            ]
        },
        {
            category: '6 Month Boost',
            type: [
                {
                    name: '4 Boosts',
                    price: '$12.99',
                    id: ''
                },
                {
                    name: '8 Boosts',
                    price: '$28.99',
                    id: ''
                },
                {
                    name: '10 Boosts',
                    price: '$33.99',
                    id: ''
                },
                {
                    name: '14 Boosts',
                    price: '$39.99',
                    id: ''
                }
            ]
        },
        {
            category: '1 Year Boost',
            type: [
                {
                    name: '8 Boosts',
                    price: '$49.99',
                    id: ''
                },
                {
                    name: '10 Boosts',
                    price: '$59.99',
                    id: ''
                },
                {
                    name: '14 Boosts',
                    price: '$74.99',
                    id: ''
                },
                {
                    name: '30 Boosts',
                    price: '$99.99',
                    id: ''
                }
            ]
        },
        {
            category: 'Lifetime Boost',
            type: [
                {
                    name: '15 Boosts',
                    price: '$119.99',
                    id: ''
                },
                {
                    name: '30 Boosts',
                    price: '$149.99',
                    id: ''
                }
            ]
        },
        {
            category: 'Reseller',
            type: [
                {
                    name: 'Reseller Plan',
                    price: '$99.99',
                    id: '',
                    desc: [
                        '33% Off All Products',
                        'Lifetime Access',
                        'Premium Support',
                    ]

                }
            ]
        },
        {
            category: 'Youtube',
            type: [
                {
                    name: 'YouTube Premium | 1 Months',
                    price: '$4.99',
                    id: ''
                },
                {
                    name: 'YouTube Premium | 3 Months',
                    price: '$12.99',
                    id: ''
                },
                {
                    name: 'YouTube Premium | 6 Months',
                    price: '$24.99',
                    id: ''
                },
                {
                    name: 'Youtube Premium | 1 Year',
                    price: '$39.99',
                    id: ''
                },

            ]
        },
        {
            category: 'Nitro',
            type: [
                {
                    name: 'Discord Nitro | 1 Month',
                    price: '$5.99',
                    id: '',
                    desc: [
                        'Works for all users',
                        'Comes with 2 Boosts',
                        'Full Warranty',
                    ]
                },
                {
                    name: 'Discord Nitro | 3 Months',
                    price: '$7.49',
                    id: '',
                    desc: [
                        'Works for new nitro users',
                        'Comes with 2 Boosts',
                        'Full Warranty',
                    ]
                },
                {
                    name: 'Dicord Nitro | 1 Year',
                    price: '$44.99',
                    id: '',
                    desc: [
                        'Works for all users',
                        'Comes with 2 Boosts',
                        'Full Warranty',
                    ]

                },
                {
                    name: 'Nitro Basic | 1 Year',
                    price: '$19.99',
                    id: '',
                    desc: [
                        'Works for all users',
                        'Full Warranty',
                    ]
                },

            ]
        },
        {
            category: 'Members',
            type: [
                {
                    name: 'Offline Members',
                    price: '$6/300',
                    desc: [
                        'Lifetime Warranty',
                        'Profile Pictures',
                        'Realistic Names'
                    ]
                },
                {
                    name: 'Online Members',
                    price: '$6/100',
                    desc: [
                        'Lifetime Warranty',
                        'Profile Pictures',
                        'Realistic Names'
                    ]
                },
                {
                    name: 'Premium Members',
                    price: '$8/100',
                    desc: [
                        'Lifetime Warranty',
                        'Profile Pictures',
                        'Realistic Names',
                        'Unique Custom Status'
                    ]
                },
                {
                    name: 'Reaction Members',
                    price: '$10/100',
                    desc: [
                        'Lifetime Warranty',
                        'Profile Pictures',
                        'Realistic Names',
                        'Button & Emoji Reactions'
                    ]
                },

            ]
        },
    ]
    res.status(200).json({ products })
}