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
/*page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response, undefined, 4));
};*/

page.open("http://www.bilibili.com/video/dance.html", function(status) {
    //Page is loaded!
    console.log("Status: " + status);
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        //此处的打印，是将结果一流的形式output到java中，java通过InputStream可以获取该输出内容

        //setTimeout(console.log(page.content), 5000); //5000毫秒=1秒后执行test方法
        var title = page.evaluate(function() {
            return document.title;
        });
        console.log('Page title is ' + title);

        var source = page.evaluate(function() {
            return document.documentElement.innerHTML;
        });

        console.log('Page source is ' + source);

    }
});
