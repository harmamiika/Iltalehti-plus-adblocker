// add hello world to the body
// artles hidden text

const hide = (element) => {
  element.style.visibility = 'hidden';
  element.style.height = '0px';
  element.style.paddingBottom = '0px';
};

const hideArticles = () => {
  const articles = document.querySelectorAll('.full-article, .half-article');
  articles.forEach((article) => {
    if (article.querySelector('.il-plus-svg-logo.inline')) {
      article.style.visibility = 'hidden';
    }
  });
};

const hideContainers = () => {
  const containers = document.querySelectorAll('.card.fp-container');
  containers.forEach((container) => {
    const articles = container.querySelectorAll('.full-article, .half-article');

    let hidden = true;
    articles.forEach((article) => {
      if (article.style.visibility !== 'hidden') {
        hidden = false;
      }
    });

    if (hidden) {
      hide(container);
    }
  });
};

const hideSticker = () => {
  const newStick = document.querySelector('.newsticker-container');
  hide(newStick);
};

document.addEventListener('scroll', function () {
  hideSticker();
  hideArticles();
  hideContainers();
  // select items with classname full-article
  // if article contains svg with classname 'il-plus-svg-logo inline'
  // hide article
});
