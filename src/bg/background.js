chrome.webRequest.onBeforeRequest.addListener(
    function(d) {
        var current_url = d.url;
        var host = current_url.match(/(https?:\/\/|www\.?)(www\.)?([^\/\s]+)/ig)[0];
        host = host.replace("wikipedia.org","vikipedi.pw");
        var el = document.createElement('a');
        el.href = current_url;
        var path = el.pathname;
        return {redirectUrl:host+path};
    },{urls: ["*://wikipedia.org/*","*://www.wikipedia.org/*","*://*.wikipedia.org/*",],
       types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
      },["blocking"]);
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.update({
        url: "https://kslnk.xyz/trvikipedipw"
    });
});
