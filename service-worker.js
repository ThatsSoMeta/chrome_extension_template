chrome.runtime.onInstalled.addListener(() => {
  console.log("Runtime installed");
  chrome.contextMenus.create({
    "id": "faceliftMenu",
    "title": "Facelift Menu",
    "contexts": ["selection"]
  });
});

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    console.log({msg, portName: port.name});
    port.postMessage({type: "init"});
    if (msg.type === "init") {
      console.log("Init message received");
    }
  });
});
