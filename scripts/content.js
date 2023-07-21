const styles = document.querySelectorAll('style, [rel="stylesheet"], [type="text/css"], [href$=".css"], [href$=".scss"]');

console.log({styles});

var port = chrome.runtime.connect({name: "facelift"});
port.postMessage({type: "init"});
port.onMessage.addListener(function(msg) {
  console.log({msg, portName: port.name});
});