// add hello world to the body
// artles hidden text

const hideArticles = () => {
  // if no articler with classname full-article or half-article and with svg with classname il-plus-svg-logo inlin

  const articles = document.querySelectorAll('.full-article, .half-article');

  articles.forEach((article) => {
    if (article.querySelector('.il-plus-svg-logo.inline')) {
      article.style.visibility = 'hidden';
    }
  });
};

const hideContainers = () => {
  const containers = document.querySelectorAll('.card.fp-container');
  const containers2 = document.querySelectorAll('.fp-container');
  const containers3 = document.querySelectorAll('.card');
  console.log(containers, 'containers');
  console.log(containers2, 'containers2');
  console.log(containers3, 'containers3');
  containers.forEach((container) => {
    // if containers child elements with classname full-article or half-article and with svg with classname il-plus-svg-logo inline all have visibility hidden
    // hide container
    const articles = container.querySelectorAll('.full-article, .half-article');
    let hidden = true;
    articles.forEach((article) => {
      if (article.style.visibility !== 'hidden') {
        hidden = false;
      }
    });

    if (hidden) {
      console.log('hid something');
      container.style.visibility = 'hidden';
      container.style.height = '0px';
    }
  });
};

// const hideNewStick = () => {
//   const newStick = document.querySelector('.newsticker-container');
//   newStick.style.visibility = 'hidden';
// };

document.addEventListener('scroll', function () {
  // hideNewStick();
  hideArticles();
  hideContainers();
  // select items with classname full-article
  // if article contains svg with classname 'il-plus-svg-logo inline'
  // hide article
});
