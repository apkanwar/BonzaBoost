export default async function handler(req, res) {
    const { categoryId = 1 } = req.query;
    console.log("API request received with:", req.method, "categoryId:", categoryId);

    const url = `https://pg-api.billgang.com/v1/dash/shops/3a31d58c-9273-4d74-bb78-2c55aad39453/products?categoryId=${categoryId}`;
    console.log("Fetching URL:", url);

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_BILLGANG_API_KEY}`
            }
        });

        if (!response.ok) {
            console.error("Failed to fetch from Billgang API:", {
                status: response.status,
                statusText: response.statusText,
                headers: [...response.headers],
            });
            res.status(response.status).json({ error: response.statusText });
            return;
        }

        const data = await response.json();
        if (!data || !data.data) {
            console.error("Unexpected response format from Billgang API:", data);
            res.status(500).json({ error: "Unexpected response format" });
            return;
        }

        res.status(200).json(data.data);
    } catch (error) {
        console.error("Error in API handler:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}
