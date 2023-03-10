import ky from 'ky-universal';
import { GITHUB_API_URL } from '../constants.js';
const api = ky.create({
    prefixUrl: `${GITHUB_API_URL}repos/zeepkist/discord-bot/`,
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28'
    }
});
export const getReleases = async () => {
    const searchParameters = new URLSearchParams({
        per_page: '1'
    });
    const response = await api.get('releases', {
        searchParams: searchParameters
    });
    if (response.ok)
        return response.json();
    else {
        throw response.json();
    }
};