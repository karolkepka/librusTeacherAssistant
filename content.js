console.log("content.js script is running");

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("lama");
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
	  console.log("LAMA22");
      console.log(firstHref);
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
