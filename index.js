const hideElement = (element) => {
  element.style.visibility = 'hidden';
  element.style.height = '0px';
  element.style.padding = '0px';
  element.style.margin = '0px';
};

const hideArticles = () => {
  const articles = document.querySelectorAll('.full-article, .half-article');
  articles.forEach((article) => {
    if (article.querySelector('.il-plus-svg-logo.inline')) {
      hideElement(article);
    }
  });
};

const hideSponsoredSegments = () => {
  const articleContainers = document.querySelectorAll('.card.fp-container');
  articleContainers.forEach((articleContainer) => {
    const article = articleContainer.querySelector('.full-article');
    const imageContainers = article?.querySelectorAll('.list.image-container');
    if (imageContainers?.length > 1) {
      hideElement(article);
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

const hideElements = () => {
  hideStickers();
  hideArticles();
  hideContainers();
};

function main(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      const addedNodes = Array.from(mutation.addedNodes);
      if (addedNodes.find((node) => node.matches && node.matches('.card'))) {
        hideElements();
      }
    }
  }
}

const observer = new MutationObserver(main);
observer.observe(document, { childList: true, subtree: true });
