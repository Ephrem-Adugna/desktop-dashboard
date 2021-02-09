const axios = require('axios')
axios.get('https://api.openweathermap.org/data/2.5/weather?q=inglewood,CA&appid=cef80f029273e28c942235af316c19fe', {
    headers: { 'x-rapidapi-key': '5605641254msh537464a7507e422p12c67ejsnb3a9f99a5bee', 'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com', useQueryString: true }

})
    .then((response) => {
        const weather = response.data.weather[0].main;
        document.getElementById('weather').innerHTML = "Weather: " + weather;
    }, (error) => {
        console.log(error);
    });