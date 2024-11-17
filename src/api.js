import axios from "axios";

const API_KEY = '739d04ad96c448d4ad4f09feb534a009';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general', country = 'us') => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                apikey: API_KEY,
                category,
                country,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};