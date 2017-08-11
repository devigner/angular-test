
function search(query)
{
    var headers = new Headers();
    headers.append('Ocp-Apim-Subscription-Key','792eb298b5884c9ca7a45335bcfb414d');
    var options = { method: 'GET',
               headers: headers,
               mode: 'cors',
               cache: 'default' }
    fetch('https://api.cognitive.microsoft.com/bing/v5.0/search?q='+query+'&mkt=nl-nl', options).then((response) => {
        
        response.json().then(function(data) {
            console.log(data);
        });
        
    });
}

search('hotel ibiza');

document.querySelector('button#btn').onclick = function(){
    search(document.querySelector('#query').value);
};