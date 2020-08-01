import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID PCqgn0T9OdMmO07Qq39EHJcY2M_hKXwC6HHqymBJi-s'
    }//the .then() is a promise function that will get called sometime in the future
});

