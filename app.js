
var currentUrl = '';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.title && tab.title.includes('Duolingo')) {
            if (tab.url.includes('skill') || tab.url.includes('practice')) {
                if (tab.url.includes('join')) {
                    var fixedUrl = 'https://' + tab.url.substring(13, tab.url.length);
                    setTimeout(() => {
                        currentUrl = fixedUrl;
                    }, 3000);
                    currentUrl = 'pending';
                    chrome.tabs.update({ url: fixedUrl });
                }
            }
            if (tab.url.includes('learn')) {
                setTimeout(() => {
                    if (currentUrl.includes('skill') || currentUrl.includes('practice')) {
                        if (tab.url.includes('join.')) return;
                        fixedUrl = 'https://join.' + tab.url.substring(12, tab.url.length);
                        chrome.tabs.executeScript({
                            code: 'var currentUrl = ' + '"' + currentUrl + '"'
                        }, () => {
                            chrome.tabs.executeScript({ file: "onfinish.js" });
                        });
                    }
                }, 1000)
            }

        }
    }
})