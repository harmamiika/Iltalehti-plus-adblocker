const hide = (element) => {
  element.style.visibility = 'hidden';
  element.style.height = '0px';
  element.style.paddingBottom = '0px';
};

const hideArticles = () => {
  const articles = document.querySelectorAll('.full-article, .half-article');
  articles.forEach((article) => {
    if (article.querySelector('.il-plus-svg-logo.inline')) {
      hide(article);
    }
  });
};

const hideContainers = () => {
  const containers = document.querySelectorAll('.card.fp-container');
  containers.forEach((container) => {
    const articles = container.querySelectorAll('.full-article, .half-article');

    let hidden = true;
    articles.forEach((article) => article.style.visibility !== 'hidden' && (hidden = false));
    // cyrrently if one is not hidden, all are hidden
    // v2: if every article is not hidden, hide articles, not container
    // however currently there is no need for this, since if there is one hidden article, all articles in the container are hidden

    if (hidden) hide(container);
  });
};

const hideSticker = () => {
  const stickerItems = document.querySelectorAll('.newsticker-item');
  stickerItems.forEach((stickerItem) => {
    if (stickerItem.querySelector('.il-plus-svg-logo.inline')) {
      hide(stickerItem);
    }
  });
};

function main() {
  hideSticker();
  hideArticles();
  hideContainers();
}

window.requestAnimationFrame(main);

// Changes to the IL-site might break this script
