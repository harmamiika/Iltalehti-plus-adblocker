function hideElements(classname) {
  console.log('yo yo yo');

  const articles = document.querySelectorAll('full-article');
  console.log(articles, 'articles');

  var elements = document.querySelectorAll(classname);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}
console.log('yo');

var backgroundPage = chrome.extension.getBackgroundPage();
console.log(backgroundPage, 'backgroundPage');

chrome.browserAction.onClicked.addListener(function (tab) {
  console.log('yo2');
  chrome.tabs.executeScript({
    // code: 'hideElements(".classname");',
    code: 'console.log("Hello, World!");',
  });
});
