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

console.log('yo2');
console.log('yop3');

chrome.browserAction.onClicked.addListener(function (tab) {
  console.log('yo2');
  chrome.tabs.executeScript({
    // code: 'hideElements(".classname");',
    code: 'console.log("Hello, World!");',
  });
});

document.addEventListener('DOMContentLoaded', function () {
  console.log('yo man weed');
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(function (element) {
    element.style.display = 'none';
  });

  // add app bar to page

  const appbar = document.createElement('div');
  appbar.classList.add('appbar');
  appbar.innerHTML = `
    <div class="appbar__item">
      <button class="appbar__button">Hide</button>
    </div>  
  `;
  document.body.appendChild(appbar);
});
