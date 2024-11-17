// api/billgang-products.js

export default async function handler(req, res) {
    const { categoryId = 1 } = req.query;
    console.log(req.query)
    const url = new URL(`https://pg-api.billgang.com/v1/dash/shops/3a31d58c-9273-4d74-bb78-2c55aad39453/products?categoryId=${categoryId}`);

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_BILLGANG_API_KEY}`
            }
        });
        if (!response.ok) {
            console.error("Failed to fetch groups from Billgang:", response.status, response.statusText);
            res.status(response.status).json({ error: response.statusText });
            return;
        }

        const data = await response.json();
        res.status(200).json(data.data);
    } catch (error) {
        console.error("Error fetching group data:", error); // Log error details
        res.status(500).json({ error: 'Error fetching group data' });
    }
}
