chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
      chrome.storage.local.get(["customJS", "customCSS"], (data) => {
        if (data.customJS) {
          chrome.scripting.executeScript({
            target: { tabId },
            func: new Function(data.customJS),
          });
        }
        if (data.customCSS) {
          chrome.scripting.insertCSS({
            target: { tabId },
            css: data.customCSS,
          });
        }
      });
    }
  });
  