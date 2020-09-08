import axios from 'axios';

const KEY = 'AIzaSyAAN1Ibw3m4AiK2rtHYJiZ8x32W6kOu30E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});