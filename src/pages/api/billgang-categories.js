export default async function handler(req, res) {
    try {
        // Fetch data from the external API
        const response = await fetch('https://pg-api.billgang.com/v1/dash/shops/3a31d58c-9273-4d74-bb78-2c55aad39453/categories', {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_BILLGANG_API_KEY}`
            },
        });

        // Check if the external request was successful
        if (!response.ok) {
            console.error("Failed to fetch groups from Billgang:", response.status, response.statusText);
            res.status(response.status).json({ error: response.statusText });
            return;
        }

        // Parse the response from the external API
        const data = await response.json();

        // Set headers to disable caching on your API response
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Surrogate-Control', 'no-store');

        // Send the response with a 200 status code and the fetched data
        res.status(200).json(data.data);
    } catch (error) {
        // Log any error that occurred during the fetch
        console.error("Error fetching group data:", error);
        res.status(500).json({ error: 'Error fetching group data' });
    }
}
