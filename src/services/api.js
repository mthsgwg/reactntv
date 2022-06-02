import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDaHQDAUz1WeUVFgxhYdbEUA-0eb2Am4Ig&part=snippet&playlistId=PLSmdHC4HiQ9InCLHRpBnS6qTHOcufwYe2&maxResults=5',
});

export default api;
