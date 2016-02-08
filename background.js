console.log("backgrond.js script is running");
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    console.log("send message")
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });

});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
    	console.log("dupa33");
      chrome.tabs.create({"url": request.url});
    }
  }
);