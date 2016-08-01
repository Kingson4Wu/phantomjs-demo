var page = require('webpage').create();
page.onResourceRequested = function(request) {
    //console.log('Request ' + JSON.stringify(request, undefined, 4));
    var url = request.url;
    if (url.indexOf("?source=2") > 0) {
        console.log('Request: ' + request.url);
        var value = url.substring(url.indexOf("as="));
        value = value.substring(3, value.indexOf("&"));
        console.log(value);
        //page.close;
    }
};

//page.open("http://toutiao.com/news_entertainment/");

setInterval(function() {
    page.open("http://toutiao.com/news_entertainment/");
}, 5000);
