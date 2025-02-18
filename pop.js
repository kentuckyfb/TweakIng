document.getElementById("save").addEventListener("click", () => {
    const customJS = document.getElementById("jsInput").value;
    const customCSS = document.getElementById("cssInput").value;
  
    chrome.storage.local.set({ customJS, customCSS }, () => {
      alert("Saved! Reload your tab to see changes.");
    });
  });
  