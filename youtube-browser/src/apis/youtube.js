import axios from 'axios';

//caps KEY because the variable is constant
const KEY = 'AIzaSyBvU2vy44fSKzl7uxsZ_-Ek6R1V58XZ4M4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    
    }
});

