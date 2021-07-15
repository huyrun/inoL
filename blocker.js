chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://www.linkedin.com/li/track"]
    },
    ["blocking"]
);