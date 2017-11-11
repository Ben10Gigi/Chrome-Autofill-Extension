document.getElementById('fillForm').addEventListener('click', function(){
  chrome.tabs.executeScript({
    file: "toinject.js"
  });
});