

const NewsApi = (category, count) => {
    const fetch = require('node-fetch');

    const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`;

    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
            'X-RapidAPI-Key': 'bbf72c94d5mshd637cc590388f27p1a130djsn13d022119474'
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.value)

}


export default NewsApi