const axios = require('axios')
axios.get('https://bing-news-search1.p.rapidapi.com/news', {
    headers: { 'x-rapidapi-key': '5605641254msh537464a7507e422p12c67ejsnb3a9f99a5bee', 'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com', useQueryString: true}

})
    .then((response) => {
        let i = 0;
        for (var element of response.data.value) {
            i++;
            if (i === 6) break;
            document.getElementsByTagName('body')[0].innerHTML += '<a href="'+element.url+'"><div class="newscontainer"> <div class="news">         <h2> ' +element.name +'</h2>         <hr>         <div class="description">' + element.description+'</div>     </div> </div></a>'
    }
    }, (error) => {
        console.log(error);
    });
