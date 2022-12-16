function hideElements(classname) {
  console.log('yo yo yo');

  const articles = document.querySelectorAll('full-article');
  console.log(articles, 'articles');

  var elements = document.querySelectorAll(classname);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    code: 'hideElements(".classname");',
  });
});
