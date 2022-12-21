const hideElement = (element) => {
  element.style.visibility = 'hidden';
  element.style.height = '0px';
  element.style.paddingBottom = '0px';
  element.style.marginBottom = '0px';
};

const hideArticles = () => {
  const articles = document.querySelectorAll('.full-article, .half-article');
  articles.forEach((article) => {
    if (article.querySelector('.il-plus-svg-logo.inline')) {
      hideElement(article);
    }
  });
};

// cyrrently if one article inside container is hidden, all are hidden
// v2: if every article is not hidden, hide articles, not container
// however currently there is no need for this, since the site is structured so that if there is one hidden article, all articles in its container are hidden

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
      hideElement(container);
    }
  });
};

const hideStickers = () => {
  const stickerItems = document.querySelectorAll('.newsticker-item');
  stickerItems.forEach((stickerItem) => {
    if (stickerItem.querySelector('.il-plus-svg-logo.inline')) {
      hideElement(stickerItem);
    }
  });
};

function main() {
  hideStickers();
  hideArticles();
  hideContainers();
}

window.requestAnimationFrame(main);

// V2 roadmap (likely not coming):
// - also hide sponsored segments
// - (add to chrome extension store?)
