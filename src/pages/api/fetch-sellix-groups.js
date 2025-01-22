// /pages/api/fetch-sellix-groups.js

export default async function handler(req, res) {
    try {
        const response = await fetch('https://dev.sellix.io/v1/groups', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.SELLIX_API_KEY}`,  // Store your API key securely
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch groups from Sellix');
        }
        const data = await response.json();
        res.status(200).json(data.data.groups);  // Return the groups (with bound products)
    } catch (error) {
        res.status(500).json({ error: 'Error fetching group data' });
    }
}