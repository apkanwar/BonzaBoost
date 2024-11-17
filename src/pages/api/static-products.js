export default function handler(req, res) {
    const StaticProducts = [
        {
            "01: 1 Month Boost": [
                {
                    "id": 254707997,
                    "name": "2 Boosts | 1 Month",
                    "shortDescription": "Level 1 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-07T02:09:58.520073Z",
                    "minPrice": {
                        "amount": 2.49,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "2-boosts-1-month",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/eb82ae63-3136-4bbd-605b-cf5ed67ca700",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707998,
                    "name": "8 Boosts | 1 Month",
                    "shortDescription": "Level 2 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:37:20.55132Z",
                    "minPrice": {
                        "amount": 6.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "8-boosts-1-month",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/87fe0a52-6db5-4562-e59b-8c7c5a574200",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707999,
                    "name": "10 Boosts | 1 Month",
                    "shortDescription": "Level 2 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:37:28.038901Z",
                    "minPrice": {
                        "amount": 7.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "1-boosts-1-month",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/964654a8-9cb9-4445-825c-c5288819bd00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254708041,
                    "name": "14 Boosts | 1 Month",
                    "shortDescription": "Level 3 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:37:49.809446Z",
                    "minPrice": {
                        "amount": 9.49,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "14-boosts-1-month-copy",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/34002c84-b63e-4d0f-9c88-ac5c9d5f6b00",
                    "visibility": "PUBLIC"
                }
            ],
            "02: 3 Month Boost": [
                {
                    "id": 254707948,
                    "name": "14 Boosts | 3 Months",
                    "shortDescription": "Level 3 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:36:17.84025Z",
                    "minPrice": {
                        "amount": 18.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "14-boosts-3-months",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/34002c84-b63e-4d0f-9c88-ac5c9d5f6b00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707949,
                    "name": "10 Boosts | 3 Months",
                    "shortDescription": "Level 2 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:37:04.09094Z",
                    "minPrice": {
                        "amount": 15.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "1-boosts-3-months",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/964654a8-9cb9-4445-825c-c5288819bd00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707951,
                    "name": "8 Boosts | 3 Months",
                    "shortDescription": "Level 2 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:36:56.109892Z",
                    "minPrice": {
                        "amount": 13.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "8-boosts-3-months",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/87fe0a52-6db5-4562-e59b-8c7c5a574200",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707953,
                    "name": "2 Boosts | 3 Months",
                    "shortDescription": "Level 1 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-07T02:04:52.5974Z",
                    "minPrice": {
                        "amount": 4.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "2-boosts-3-months",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/eb82ae63-3136-4bbd-605b-cf5ed67ca700",
                    "visibility": "PUBLIC"
                }
            ],
            "03: 6 Month Boost": [
                {
                    "id": 254707942,
                    "name": "4 Boosts | 6 Months",
                    "shortDescription": "Level 1 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-07T02:09:41.239599Z",
                    "minPrice": {
                        "amount": 11.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "4-boosts-6-months",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/9368e370-bd3c-4d37-32bf-1783f3ce0c00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707946,
                    "name": "8 Boosts | 6 Months",
                    "shortDescription": "Level 2 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:35:46.765072Z",
                    "minPrice": {
                        "amount": 27.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "level-2-boost-instant-delivery-1-legally-obtained-full-warranty",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/87fe0a52-6db5-4562-e59b-8c7c5a574200",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707947,
                    "name": "10 Boosts | 6 Months",
                    "shortDescription": "Level 2 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:36:02.836425Z",
                    "minPrice": {
                        "amount": 29.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "1-boosts-6-months",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/964654a8-9cb9-4445-825c-c5288819bd00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254708055,
                    "name": "14 Boosts | 6 Months",
                    "shortDescription": "Level 3 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:37:38.283225Z",
                    "minPrice": {
                        "amount": 34.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "14-boosts-6-months",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/34002c84-b63e-4d0f-9c88-ac5c9d5f6b00",
                    "visibility": "PUBLIC"
                }
            ],
            "04: 1 Year Boost": [
                {
                    "id": 254707935,
                    "name": "30 Boosts | 1 Year",
                    "shortDescription": "Level 3 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-07T02:09:22.764089Z",
                    "minPrice": {
                        "amount": 99.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "3-boosts-1-year",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/1e8d9d8e-50c1-4977-4412-3d283f85c800",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707938,
                    "name": "14 Boosts | 1 Year",
                    "shortDescription": "Level 3 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:35:10.902712Z",
                    "minPrice": {
                        "amount": 64.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "14-boosts-1-year",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/34002c84-b63e-4d0f-9c88-ac5c9d5f6b00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707940,
                    "name": "10 Boosts | 1 Year",
                    "shortDescription": "Level 2 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:35:19.853947Z",
                    "minPrice": {
                        "amount": 59.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "1-boosts-1-year",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/964654a8-9cb9-4445-825c-c5288819bd00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707941,
                    "name": "8 Boosts | 1 Year",
                    "shortDescription": "Level 2 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:35:30.408389Z",
                    "minPrice": {
                        "amount": 54.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "8-boosts-1-year",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/87fe0a52-6db5-4562-e59b-8c7c5a574200",
                    "visibility": "PUBLIC"
                }
            ],
            "05: Lifetime Boost": [
                {
                    "id": 254707934,
                    "name": "14 Boosts | Lifetime",
                    "shortDescription": "Level 3 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-08T19:35:02.497439Z",
                    "minPrice": {
                        "amount": 119.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "14-boosts-lifetime",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/34002c84-b63e-4d0f-9c88-ac5c9d5f6b00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254708042,
                    "name": "30 Boosts | Lifetime",
                    "shortDescription": "Level 3 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-09T16:46:22.609932Z",
                    "minPrice": {
                        "amount": 149.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "3-boosts-lifetime000-copy",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/cb069a8d-97d1-4287-bd46-1f3167a67e00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254708043,
                    "name": "100 Boosts | Lifetime",
                    "shortDescription": "Level 3 Boost, Instant Delivery, 100% Legally Obtained, Full Warranty",
                    "lastTimeUpdatedAt": "2024-11-09T16:46:04.925067Z",
                    "minPrice": {
                        "amount": 349.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "1-boosts-lifetime-copy",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/12b4cc53-8307-499d-5375-27065bf8a200",
                    "visibility": "PUBLIC"
                }
            ],
            "06: Members": [
                {
                    "id": 254707908,
                    "name": "Offline Members",
                    "shortDescription": "Lifetime Warranty, Profile Pictures, Realistic Names",
                    "lastTimeUpdatedAt": "2024-11-07T02:05:30.227418Z",
                    "minPrice": {
                        "amount": 0.02,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "offline-members",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/fdbde524-917b-471a-35c9-b853cde68a00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707909,
                    "name": "Online Members",
                    "shortDescription": "Lifetime Warranty, Profile Pictures, Realistic Names",
                    "lastTimeUpdatedAt": "2024-11-07T02:06:01.724114Z",
                    "minPrice": {
                        "amount": 0.06,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "offline-members-copy",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/987b21b6-efa5-42b3-4fe5-f709c5591800",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707931,
                    "name": "Premium Members",
                    "shortDescription": "Lifetime Warranty, Realistic Names, Profile Pictures, Unique Custom Status",
                    "lastTimeUpdatedAt": "2024-11-01T17:18:38.55716Z",
                    "minPrice": {
                        "amount": 0.08,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "premium-members",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707932,
                    "name": "Reaction Members",
                    "shortDescription": "Lifetime Warranty, Profile Pictures, Realistic Names, Button & Emoji Reactions",
                    "lastTimeUpdatedAt": "2024-11-07T02:09:09.595383Z",
                    "minPrice": {
                        "amount": 0.06,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "reaction-members",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/df015997-c18f-4b4f-eba1-23787a89ed00",
                    "visibility": "PUBLIC"
                }
            ],
            "07: Nitro": [
                {
                    "id": 254707242,
                    "name": "Discord Nitro | 1 Month",
                    "shortDescription": "Works for all users, Comes with 2 Boosts, Full Warranty, 100% Legally Obtained",
                    "lastTimeUpdatedAt": "2024-11-14T18:52:28.762844Z",
                    "minPrice": {
                        "amount": 6.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "discord-nitro-1-month",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/9aedb70d-c05e-4fbe-ddd0-7ddf9290ff00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707896,
                    "name": "Discord Nitro | 3 Months",
                    "shortDescription": "Works for new nitro users, Comes with 2 Boosts, Full Warranty, 100% Legally Obtained",
                    "lastTimeUpdatedAt": "2024-11-14T18:52:36.518459Z",
                    "minPrice": {
                        "amount": 7.49,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "discord-nitro-3-months",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/9aedb70d-c05e-4fbe-ddd0-7ddf9290ff00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707897,
                    "name": "Dicord Nitro | 1 Year",
                    "shortDescription": "Works for all users, Comes with 2 Boosts, Full Warranty, 100% Legally Obtained",
                    "lastTimeUpdatedAt": "2024-11-16T01:51:53.489829Z",
                    "minPrice": {
                        "amount": 69.99,
                        "currency": "USD"
                    },
                    "isInStock": false,
                    "uniquePath": "dicord-nitro-1-year",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/9aedb70d-c05e-4fbe-ddd0-7ddf9290ff00",
                    "visibility": "PUBLIC"
                },
                {
                    "id": 254707899,
                    "name": "Nitro Basic | 1 Year",
                    "shortDescription": "Works for all users, Full Warranty, 100% Legally Obtained",
                    "lastTimeUpdatedAt": "2024-11-14T18:52:57.962251Z",
                    "minPrice": {
                        "amount": 19.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "nitro-basic-1-year",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/7882181c-39a8-4e3c-0d34-0d7678406700",
                    "visibility": "PUBLIC"
                }
            ],
            "08. Upgrades": [
                {
                    "id": 254709069,
                    "name": "Netflix Premium ",
                    "shortDescription": "UHD Premium Perks, Into your account, Full Warranty, 100% Legal",
                    "lastTimeUpdatedAt": "2024-11-10T17:45:01.262502Z",
                    "minPrice": {
                        "amount": 12.99,
                        "currency": "USD"
                    },
                    "isInStock": true,
                    "uniquePath": "netflix-1-month",
                    "imagePath": "A5gbiev6F8AaBvp6M146Kw/5606b30e-ff48-411a-6732-e3f6588c9e00",
                    "visibility": "PUBLIC"
                }
            ]
        }
    ]
    res.status(200).json({ StaticProducts })
}