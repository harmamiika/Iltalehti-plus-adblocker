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
    console.log(imageContainers?.length, 'imageContainers');
    if (imageContainers?.length > 1) {
      console.log('match');
      hideElement(article);
    }
  });
};

const hideContainers = () => {
  const containers = document.querySelectorAll('.card.fp-container');

  containers.forEach((container) => {
    const articles = container.querySelectorAll('.full-article, .half-article');

    // bit overcomplicated currently, but in the future this logic can be extended more easily
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

function main() {
  hideElements();
  // sometimes the page is not fully loaded when the script is run
  setTimeout(hideElements, 1000);
  setTimeout(hideElements, 3000);
  setTimeout(hideElements, 5000);
  setTimeout(hideElements, 10000);
}

window.requestAnimationFrame(main);

// V2 roadmap (likely not coming):
// - also hide sponsored segments
// sponsored segment: cardfpcontainer > full article has 2 elements with class list-image-container
// also hide side ads

// side article container
// side-column-container show-true
// TAI
// side-column-content
// itemit ovat a hrefejä
// joiden sisällä plyus il logo
