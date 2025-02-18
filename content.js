chrome.storage.local.get(["customJS", "customCSS"], (data) => {
    if (data.customJS) {
      eval(data.customJS);
    }
    if (data.customCSS) {
      const style = document.createElement("style");
      style.innerHTML = data.customCSS;
      document.head.appendChild(style);
    }
  });
  