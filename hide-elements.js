// add hello world to the body
// artles hidden text

const hideArticles = () => {
  const articles = document.querySelectorAll('.full-article, .half-article');

  articles.forEach((article) => {
    if (article.querySelector('.il-plus-svg-logo.inline')) {
      // article.classList.add('none');
      console.log(article, 'article');
      // article.style.display = 'none';

      article.style.visibility = 'hidden';
    }
  });
};

// small articles have class="half-article"

document.addEventListener('scroll', function () {
  hideArticles();
  // select items with classname full-article
  // if article contains svg with classname 'il-plus-svg-logo inline'
  // hide article
});
